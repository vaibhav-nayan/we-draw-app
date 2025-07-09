import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from "./utils/config"
import { createNewShape, getManyShapesByIds, getShapeById} from '@repo/db/shapes'
import { popFromStack, pushToStack, reverseActionType } from './utils/helper.js';
import { queueDeleteShapes, queueMoveCircle, queueMoveLine, queueMovePencil, queueMoveRect, queueMoveText, queueUpdateCircle, queueUpdateLine, queueUpdateRect, queueUpdateText } from './jobs/shapeJobs.js';
import { connectPubSubsClients} from "@repo/pubsub/client";
import { publishToRoom, publishToSystem } from '@repo/pubsub/publisher';
import { setupSubscriber } from '@repo/pubsub/subscriber';
import { IncomingMessage } from 'http';

const PORT: number = parseInt(process.env.PORT || '8080');

export type Shape = {
    id: number
    type: "RECT"
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    selected? : boolean
} | {
    id: number
    type: "CIRCLE"
    circle: {
        x: number;
        y: number;
        radius: number;
    }
    selected? : boolean
} | {
    id: number
    type: "LINE"
    line: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }
    selected? : boolean
} | {
    id: number
    type: "PENCIL",
    pencil : {
        points: {
            x: number;
            y: number;
            order: number;
        }[]
    }
    selected? : boolean
} | {
    id: number
    type: "TEXT"
    text: {
        x: number;
        y: number;
        text: string;
        fontSize: number
    }
    clientId? : string
    selected? : boolean
}

export type Action = {
    type : "draw" | "delete"| "move" | "resize",
    dx? : number,
    dy? : number,
    shapes: Shape[],
    userId? : string,
    timestamp : number       
}

interface User {
    userId : string,
    rooms : string[], 
    ws : WebSocket
}

const undoStack : Record<string, Action[]> = {};
const redoStack : Record<string, Action[]> = {};

function authorized (url : string) : string | null {

    try {
        const queryParams = new URLSearchParams(url.split('?')[1]);
        const token = queryParams.get('token') ?? "";

        if(!JWT_SECRET) return null;

        const decoded = jwt.verify(token, JWT_SECRET);

        if(typeof decoded === "string"){
            return null;
        }

        if(!decoded || !(decoded as JwtPayload).userId) {
            return null;
        }
        return decoded.userId;
    }
    catch (e) {
        return null
    }
}

async function applyMoveToShape(shapeId: number, dx: number, dy: number) {
    const shape = await getShapeById(shapeId);

    if (!shape) return;

    if (shape.type === 'RECT' && shape.rect) {
        await queueMoveRect(shapeId, dx, dy);
    }

    else if (shape.type === 'CIRCLE' && shape.circle) {
        await queueMoveCircle(shapeId, dx, dy);
    }

    else if (shape.type === 'LINE' && shape.line) {
        await queueMoveLine(shapeId, dx, dy);
    }

    else if(shape.type === 'PENCIL' && shape.pencil) {
        await queueMovePencil(shapeId, dx, dy);
    }

    else if(shape.type === 'TEXT' && shape.text) {
        await queueMoveText(shapeId, dx, dy);
    }
}

async function applyResizeToShape(shapeId: number, shape: Shape) {
    if (shape.type === 'RECT' && shape.rect) {
        await queueUpdateRect(shapeId, shape);
    }

    else if (shape.type === 'CIRCLE' && shape.circle) {
        await queueUpdateCircle(shapeId, shape);
    }

    else if (shape.type === 'LINE' && shape.line) {
        await queueUpdateLine(shapeId, shape);
    }

    else if(shape.type === 'TEXT' && shape.text) {
        await queueUpdateText(shapeId, shape);
    }
}

const broadCastToRoom = (roomId: string, event: any, senderId?: string) =>{
    const clients = rooms.get(roomId);
    if(!clients) return;

    for(const user of clients){
        if(senderId && user.userId === senderId) continue;
        if(user.ws.readyState === WebSocket.OPEN){
            user.ws.send(JSON.stringify(event));
        }
    }
}


const users : User[] = [];
const rooms : Map<string, Set<User>> = new Map();

const start = async () =>{
    await connectPubSubsClients()
    setupSubscriber(broadCastToRoom);
    const wss = new WebSocketServer({port: PORT});
    wss.on('connection', handleConnection);
}

start();

async function handleConnection (ws: WebSocket, request: IncomingMessage) {
    const url = request.url;
    if(!url){
        return;
    }
    const userId = authorized(url);
    
    if(!userId){
        ws.close();
        return null;
    }

    users.push({
        userId: userId,
        rooms: [],
        ws: ws
    })

    ws.on("message", async function message(data) {
        const parsedData = JSON.parse(data as unknown as string);

        if(parsedData.type === "join_room"){
            const roomId = parsedData.roomId;
            const user = users.find(x => x.ws === ws);
            if( !user) {
                return;
            }
            if(!user.rooms.includes(roomId)){
                user.rooms.push(parsedData.roomId);
            }

            if(!rooms.has(roomId)){
                rooms.set(roomId, new Set());
            }
            rooms.get(roomId)?.add(user);

            await publishToSystem(
                roomId,
                {
                    type: "user_joined",
                    message: {
                        userId: userId
                    }
                },
                userId
            )

            undoStack[parsedData.roomId] ||= [];
            redoStack[parsedData.roomId] ||= [];
        }

        else if(parsedData.type === "leave_room"){
            const roomId = parsedData.roomId;
            const user = users.find(x => x.ws === ws);
            if( !user) {
                return;
            }
            user.rooms = user.rooms.filter(x =>x !== roomId);
            const roomUsers = rooms.get(roomId);
            if(roomUsers){
                roomUsers.delete(user);
                if(roomUsers.size === 0){
                    rooms.delete(roomId);
                }
            }

            await publishToSystem(
                roomId,
                {
                    type: "user_left",
                    message: {
                        userId: userId
                    }
                },
                userId
            )
        }

        else if(parsedData.type === "draw"){
            const roomId = parsedData.roomId;
            const shape = parsedData.message
            console.log("Shape Creating Log")
            console.log(shape)

            const newShape = await createNewShape(userId, roomId, shape);

            console.log(newShape)

            undoStack[roomId] ||= [];
            undoStack[roomId].push({
                type: "draw",
                shapes: [newShape as Shape],
                timestamp: Date.now()
            })
            console.log("Backend Stacks")
            console.log(undoStack)
            console.log(redoStack)
            users.forEach(user =>{
                if(user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type: "confirm-draw",
                        message: {
                            clientId : shape.clientId,
                            serverId : newShape.id,
                            shape : newShape
                        },
                        roomId: roomId
                    }))
                }
            })
        }

        else if(parsedData.type === "delete"){
            const roomId = parsedData.roomId;
            const shapeIds = parsedData.message;

            try {
                const shapesToDelete = await getManyShapesByIds(shapeIds);

                if (!shapesToDelete) {
                    return;
                }
                console.log("delete Logs")
                console.log(shapesToDelete)
                undoStack[roomId] ||= [];
                undoStack[roomId].push({
                    type: "delete",
                    shapes: shapesToDelete as Shape[],
                    timestamp: Date.now()
                })
                console.log("Backend Stacks")
                console.log(undoStack)
                console.log(redoStack)


                await queueDeleteShapes(shapeIds);

                users.forEach(user =>{
                    if(user.ws !== ws && user.rooms.includes(roomId)){
                        user.ws.send(JSON.stringify({
                            type: "confirm-delete",
                            message: shapeIds,
                            roomId: roomId
                        }))
                    }
                })
                
            }
            catch (error) {
                console.error("Delete error: ", error)
            }
        }

        else if(parsedData.type === "undo") {
            const room = parsedData.roomId;
            const lastAction = popFromStack(undoStack, room);
            // console.log(lastAction)
            if (!lastAction) return;

            pushToStack(redoStack, room, reverseActionType(lastAction));

            if(lastAction.type === 'draw'){
                const deleteIds = lastAction.shapes.map(s => s.id!);
                await queueDeleteShapes(deleteIds);
            }
            else if ( lastAction.type === 'delete') {
                for (const shape of lastAction.shapes){
                    
                    try {
                        await createNewShape(userId, room, shape);
                    } catch (error) {
                        console.error("Undo error: ", error)
                    }
                        
                }
            }
            else if (lastAction.type === 'move'){
                const shapeId = lastAction.shapes[0]?.id;
                const dx = lastAction.dx;
                const dy = lastAction.dy;

                if (!shapeId || !dx || !dy) return;

                try {
                    await applyMoveToShape(shapeId, -dx, -dy);
                } catch (error) {
                    console.error("Undo move failed : ", error)
                    return;
                }
            }
            else if(lastAction.type === "resize"){
                const shapeId = lastAction.shapes[0]?.id;
                const newShape = lastAction.shapes[0];

                if (!shapeId || !newShape) return;

                try {
                    await applyResizeToShape(shapeId, newShape);
                }
                catch (error) {
                    console.error("Undo resize failed : ", error)
                    return;
                }
            }
            
            // console.log("undo action")
            // console.log(lastAction);
            // console.log("undo Stack Status")
            // console.log(undoStack[room])
            // console.log("redo Stack Status")
            // console.log(redoStack[room])
            users.forEach(user =>{
                if(user.ws !== ws && user.rooms.includes(room)){
                    user.ws.send(JSON.stringify({
                        type: "undo",
                        message: lastAction,
                        roomId: room
                    }))
                }
            })
        }

        else if(parsedData.type === "redo") {
            const room = parsedData.roomId;
            const redoAction = popFromStack(redoStack, room);
            console.log("redo Action")
            console.log(redoAction)
            if (!redoAction) return;

            pushToStack(undoStack, room, reverseActionType(redoAction));

            
            if(redoAction.type === 'draw'){
                const deleteIds = redoAction.shapes.map(s => s.id!);
                await queueDeleteShapes(deleteIds);
            }
            else if ( redoAction.type === 'delete') {
                const createdShapes : Shape[] = [];
                for (const shape of redoAction.shapes){
                    
                    try {
                        const createdShape = await createNewShape(userId, room, shape);

                        createdShapes.push(createdShape as Shape);
                    } catch (error) {
                        console.error("Undo error: ", error)
                    }
                        
                }
                users.forEach(user =>{
                    if(user.ws !== ws && user.rooms.includes(room)){
                        user.ws.send(JSON.stringify({
                            type: "redo",
                            message: {
                                type: redoAction.type,
                                shapes: createdShapes,
                            },
                            roomId: room
                        }))
                    }
                })
                return;
            }
            else if (redoAction.type === 'move'){
                // console.log("redo move called")
                const shapeId = redoAction.shapes[0]?.id;
                const dx = redoAction.dx ?? 0;
                const dy = redoAction.dy ?? 0;
                // console.log("Action : ", shapeId, dx, dy)
                if (!shapeId) return;

                try {
                    await applyMoveToShape(shapeId, -dx, -dy);
                } catch (error) {
                    console.error("Undo move failed : ", error)
                    return;
                }
                
            }
            else if (redoAction.type === 'resize'){
                const shapeId = redoAction.shapes[0]?.id;
                const newShape = redoAction.shapes[0];

                if (!shapeId || !newShape) return;

                try {
                    await applyResizeToShape(shapeId, newShape);
                } catch (error) {
                    console.error("Undo move failed : ", error)
                    return;
                }
            }
            
            console.log("undo Stack Status")
            console.log(undoStack[room])
            console.log("redo Stack Status")
            console.log(redoStack[room])
            users.forEach(user =>{
                if(user.ws !== ws && user.rooms.includes(room)){
                    user.ws.send(JSON.stringify({
                        type: "redo",
                        message: redoAction,
                        roomId: room
                    }))
                }
            })
        }

        else if(parsedData.type === "move") {
            const roomId = parsedData.roomId;
            const {shapeId, dx, dy} = parsedData.message;

            await applyMoveToShape(shapeId, dx, dy);

            const movedShape = await getShapeById(shapeId);

            if (!movedShape) return;

            undoStack[roomId] ||= [];
            undoStack[roomId].push({
                type: "move",
                shapes: [movedShape as Shape],
                dx: dx,
                dy: dy,
                timestamp: Date.now()
            })

            users.forEach(user =>{
                if(user.ws !== ws && user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type: "confirm-move",
                        message: {
                            shapeId: shapeId,
                            dx: dx,
                            dy: dy
                        },
                        roomId: roomId
                    }))
                }
            })
        }
        else if(parsedData.type === "resize") {
            const roomId = parsedData.roomId;
            const {shapeId, shape, original} = parsedData.message;

            await applyResizeToShape(shapeId, shape);

            const resizedShape = await getShapeById(shapeId);

            if (!resizedShape) return;

            undoStack[roomId] ||= [];
                undoStack[roomId].push({
                type: "resize",
                shapes: [original, resizedShape as Shape],
                timestamp: Date.now()
            })

            users.forEach(user =>{
                if(user.ws !== ws && user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type: "confirm-resize",
                        message: {
                            shapeId: shapeId,
                            shape: resizedShape
                        },
                        roomId: roomId
                    }))
                }
            })
        }

        const realtimeEvents = [
            "draw",
            "delete",
            "move",
            "resize",
            "undo",
            "redo"
        ]

        if(realtimeEvents.includes(parsedData.type)){
            const roomId = parsedData.roomId;

            publishToRoom(roomId, 
                {
                    type: parsedData.type,
                    message: parsedData.message,
                }, 
                userId);
        }
    })

    ws.on("close", () => {
        const userIndex = users.findIndex(x => x.ws === ws);
        if(userIndex === -1){
            return;
        }

        const user = users[userIndex];
        if(!user) return;
        for(const roomId of user?.rooms) {
            const roomUsers = rooms.get(roomId);
            if(roomUsers) {
                roomUsers.delete(user);
                if(roomUsers.size === 0) rooms.delete(roomId);
            }
        }

        users.splice(userIndex, 1);
    })
};
