import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/backend-common/config"
import prisma from '@repo/db/client'
import { popFromStack, pushToStack, reverseActionType } from './utils/helper';

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
}

export type Action = {
    type : "draw" | "delete",
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

const users : User[] = [];

const wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws, request) => {
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
            const user = users.find(x => x.ws === ws);
            user?.rooms.push(parsedData.roomId);
            undoStack[parsedData.roomId] ||= [];
            redoStack[parsedData.roomId] ||= [];
        }

        if(parsedData.type === "leave_room"){
            const user = users.find(x => x.ws === ws);
            if( !user) {
                return;
            }
            user.rooms = user?.rooms.filter(x =>x !== parsedData.room)
        }

        if(parsedData.type === "draw"){
            const roomId = parsedData.roomId;
            const shape = parsedData.message
            // const shape = parsedShape.shape;
            //check about message long, slangy, etc.
            // console.log("parsedData.message is this")
            // console.log(parsedData.message)
            console.log("Shape Creating Log")
            // console.log(parsedShape)
            // console.log("This is the shape object")
            console.log(shape)


            const newShape = await prisma.shape.create({
                data: {
                    userId: userId,
                    roomId: parseInt(roomId),
                    type: shape.type,
                    ...(shape.type === "RECT" && {
                        rect: {
                            create: {
                            x: shape.rect.x,
                            y: shape.rect.y,
                            width: shape.rect.width,
                            height: shape.rect.height
                            }
                        }
                    }),
                    ...(shape.type === "CIRCLE" && {
                        circle: {
                            create: {
                            x: shape.circle.x,
                            y: shape.circle.y,
                            radius: shape.circle.radius
                            }
                        }
                    }),
                    ...(shape.type === "LINE" && {
                        line: {
                            create: {
                            x1: shape.line.x1,
                            y1: shape.line.y1,
                            x2: shape.line.x2,
                            y2: shape.line.y2
                            }
                        }
                    }),
                    ...(shape.type === "PENCIL" && {
                        pencil: {
                            create: {
                                points: {
                                    createMany: {
                                    data: (shape.pencil.points as {x:number, y:number}[]).map((point, idx) => ({
                                        x: point.x,
                                        y: point.y,
                                        order: idx
                                    }))
                                    }
                                }
                            }
                        }
                    })
                },
                include: {
                    rect: true,
                    circle: true,
                    line: true,
                    pencil: {
                        include  :{
                            points : true
                        }
                    }
                }
            })

            undoStack[roomId] ||= [];
            undoStack[roomId].push({
                type: "draw",
                shapes: [newShape as Shape],
                timestamp: Date.now()
            })
            users.forEach(user =>{
                if(user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type: "draw",
                        message: newShape,
                        roomId: roomId
                    }))
                }
            })
        }

        else if(parsedData.type === "delete"){
            const roomId = parsedData.roomId;
            // console.log("on delete logs")
            // console.log(roomId)
            // console.log(parsedData)
            // console.log(parsedData.message)
            const shapeIds = parsedData.message;
            
            // console.log(shapeId)

            try {
                console.log(shapeIds)
                const shapesToDelete = await prisma.shape.findMany({
                    where: {
                        id: {
                            in: shapeIds
                        }
                    },
                    include: {
                        rect: true,
                        circle: true,
                        line: true,
                        pencil: {
                            include  :{
                                points : true
                            }
                        }
                    }
                });

                if (!shapesToDelete) {
                    return;
                }
                undoStack[roomId] ||= [];
                undoStack[roomId].push({
                type: "delete",
                shapes: shapesToDelete as Shape[],
                timestamp: Date.now()
            })
                await prisma.shape.deleteMany({
                    where: {
                        id: {
                            in: shapeIds
                        }
                    }
                })

                users.forEach(user =>{
                    if(user.rooms.includes(roomId)){
                        user.ws.send(JSON.stringify({
                            type: "delete",
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
                await prisma.shape.deleteMany({
                    where: {
                        id: {
                            in: lastAction.shapes.map(s => s.id!)
                        }
                    }
                })
            }
            else if ( lastAction.type === 'delete') {
                for (const shape of lastAction.shapes){
                    
                    try {
                        await prisma.shape.create({
                            data: {
                                userId: userId,
                                roomId: parseInt(room),
                                type: shape.type,
                                ...(shape.type === "RECT" && {
                                    rect: {
                                        create: {
                                        x: shape.rect.x,
                                        y: shape.rect.y,
                                        width: shape.rect.width,
                                        height: shape.rect.height
                                        }
                                    }
                                }),
                                ...(shape.type === "CIRCLE" && {
                                    circle: {
                                        create: {
                                        x: shape.circle.x,
                                        y: shape.circle.y,
                                        radius: shape.circle.radius
                                        }
                                    }
                                }),
                                ...(shape.type === "LINE" && {
                                    line: {
                                        create: {
                                        x1: shape.line.x1,
                                        y1: shape.line.y1,
                                        x2: shape.line.x2,
                                        y2: shape.line.y2
                                        }
                                    }
                                }),
                                ...(shape.type === "PENCIL" && {
                                    pencil: {
                                        create: {
                                            points: {
                                                createMany: {
                                                data: (shape.pencil.points as {x:number, y:number}[]).map((point, idx) => ({
                                                    x: point.x,
                                                    y: point.y,
                                                    order: idx
                                                }))
                                                }
                                            }
                                        }
                                    }
                                })
                            },
                            include: {
                                rect: true,
                                circle: true,
                                line: true,
                                pencil: {
                                    include  :{
                                        points : true
                                    }
                                }
                            }
                        })
                    } catch (error) {
                        console.error("Undo error: ", error)
                    }
                        
                }
            }
            
            console.log(lastAction);
            users.forEach(user =>{
                if(user.rooms.includes(room)){
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
                await prisma.shape.deleteMany({
                    where: {
                        id: {
                            in: redoAction.shapes.map(s => s.id!)
                        }
                    }
                })
            }
            else if ( redoAction.type === 'delete') {
                for (const shape of redoAction.shapes){
                    
                    try {
                        await prisma.shape.create({
                            data: {
                                userId: userId,
                                roomId: parseInt(room),
                                type: shape.type,
                                ...(shape.type === "RECT" && {
                                    rect: {
                                        create: {
                                        x: shape.rect.x,
                                        y: shape.rect.y,
                                        width: shape.rect.width,
                                        height: shape.rect.height
                                        }
                                    }
                                }),
                                ...(shape.type === "CIRCLE" && {
                                    circle: {
                                        create: {
                                        x: shape.circle.x,
                                        y: shape.circle.y,
                                        radius: shape.circle.radius
                                        }
                                    }
                                }),
                                ...(shape.type === "LINE" && {
                                    line: {
                                        create: {
                                        x1: shape.line.x1,
                                        y1: shape.line.y1,
                                        x2: shape.line.x2,
                                        y2: shape.line.y2
                                        }
                                    }
                                }),
                                ...(shape.type === "PENCIL" && {
                                    pencil: {
                                        create: {
                                            points: {
                                                createMany: {
                                                data: (shape.pencil.points as {x:number, y:number}[]).map((point, idx) => ({
                                                    x: point.x,
                                                    y: point.y,
                                                    order: idx
                                                }))
                                                }
                                            }
                                        }
                                    }
                                })
                            },
                            include: {
                                rect: true,
                                circle: true,
                                line: true,
                                pencil: {
                                    include  :{
                                        points : true
                                    }
                                }
                            }
                        })
                    } catch (error) {
                        console.error("Undo error: ", error)
                    }
                        
                }
            }
            
            users.forEach(user =>{
                if(user.rooms.includes(room)){
                    user.ws.send(JSON.stringify({
                        type: "redo",
                        message: redoAction,
                        roomId: room
                    }))
                }
            })
        }

        else if(parsedData.type === "sync") {
            const roomId = parsedData.roomId;
            const newShapes = parsedData.message;
            // console.log("new Shapes")
            // console.log(parsedData)
            // console.log(newShapes)

            users.forEach(user => {
                if (user.rooms.includes(roomId)) {
                    user.ws.send(JSON.stringify({
                        type: "sync",
                        message: newShapes,
                        roomId: roomId
                    }))
                }
            })
        }
    })
});
