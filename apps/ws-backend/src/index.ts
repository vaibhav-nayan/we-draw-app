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
    type : "draw" | "delete"| "move",
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
    const shape = await prisma.shape.findUnique({
        where: {id: shapeId},
        include: {
            rect: true,
            circle: true,
            line: true,
            pencil: {include: {points: true}}
        }
    });

    if (!shape) return;

    if (shape.type === 'RECT' && shape.rect) {
        await prisma.rect.update({
            where: {rectId: shapeId},
            data: {
                x: shape.rect.x + dx,
                y: shape.rect.y + dy
            }
        })
    }

    else if (shape.type === 'CIRCLE' && shape.circle) {
        await prisma.circle.update({
            where: {circleId: shapeId},
            data: {
                x: shape.circle.x + dx,
                y: shape.circle.y + dy
            }
        })
    }

    else if (shape.type === 'LINE' && shape.line) {
        await prisma.line.update({
            where: {lineId: shapeId},
            data: {
                x1: shape.line.x1 + dx,
                y1: shape.line.y1 + dy,
                x2: shape.line.x2 + dx,
                y2: shape.line.y2 + dy
            }
        })
    }

    else if(shape.type === 'PENCIL' && shape.pencil) {
        const updates = shape.pencil.points.map(point =>
            prisma.point.update({
                where: {pointId: point.pointId},
                data: {
                    x: point.x + dx,
                    y: point.y + dy
                }
            })
        )
        await prisma.$transaction([
            ...updates
        ]);
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
            console.log("Shape Creating Log")
            // console.log(shape)

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
            // console.log("on delete logs")
            // console.log(roomId)
            // console.log(parsedData)
            // console.log(parsedData.message)
            const shapeIds = parsedData.message;
            
            // console.log(shapeId)

            try {
                // console.log(shapeIds)
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
                await prisma.shape.deleteMany({
                    where: {
                        id: {
                            in: shapeIds
                        }
                    }
                })

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
                                id: shape.id,
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
            else if (lastAction.type === 'move'){
                const shapeId = lastAction.shapes[0]?.id;
                const dx = lastAction.dx ?? 0;
                const dy = lastAction.dy ?? 0;

                if (!shapeId) return;

                try {
                    await applyMoveToShape(shapeId, -dx, -dy);
                } catch (error) {
                    console.error("Undo move failed : ", error)
                    return;
                }
            }
            
            console.log("undo action")
            console.log(lastAction);
            console.log("undo Stack Status")
            console.log(undoStack[room])
            console.log("redo Stack Status")
            console.log(redoStack[room])
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

            const createdShapes : Shape[] = [];
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
                        const createdShape = await prisma.shape.create({
                            data: {
                                id: shape.id,
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

                        createdShapes.push(createdShape as Shape);
                    } catch (error) {
                        console.error("Undo error: ", error)
                    }
                        
                }
            }
            else if (redoAction.type === 'move'){
                const shapeId = redoAction.shapes[0]?.id;
                const dx = redoAction.dx ?? 0;
                const dy = redoAction.dy ?? 0;

                if (!shapeId) return;

                try {
                    await applyMoveToShape(shapeId, -dx, -dy);
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
                        message: {
                            type: redoAction.type,
                            shapes: createdShapes
                        },
                        roomId: room
                    }))
                }
            })
        }

        else if(parsedData.type === "move") {
            const roomId = parsedData.roomId;
            const {shapeId, dx, dy} = parsedData.message;

            await applyMoveToShape(shapeId, dx, dy);

            const movedShape = await prisma.shape.findUnique({
                where: {id: shapeId},
                include: {
                    rect: true,
                    circle: true,
                    line: true,
                    pencil: {include: {points: true}}
                }
            });

            if (!movedShape) return;

            undoStack[roomId] ||= [];
                undoStack[roomId].push({
                type: "move",
                shapes: [movedShape as Shape],
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
    })
});
