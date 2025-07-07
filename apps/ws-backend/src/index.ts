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
            pencil: {include: {points: true}},
            text: true
        }
    });

    if (!shape) return;

    if (shape.type === 'RECT' && shape.rect) {
        await prisma.shape.update({
            where: {id: shapeId},
            data: {
                rect: {
                    update: {
                        x: shape.rect.x + dx,
                        y: shape.rect.y + dy
                    }
                }
            }
        })
    }

    else if (shape.type === 'CIRCLE' && shape.circle) {
        await prisma.shape.update({
            where: {id: shapeId},
            data: {
                circle: {
                    update: {
                        x: shape.circle.x + dx,
                        y: shape.circle.y + dy
                    }
                }
            }
        })
    }

    else if (shape.type === 'LINE' && shape.line) {
        await prisma.shape.update({
            where: {id: shapeId},
            data: {
                line: {
                    update: {
                        x1: shape.line.x1 + dx,
                        y1: shape.line.y1 + dy,
                        x2: shape.line.x2 + dx,
                        y2: shape.line.y2 + dy
                    }
                }
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

    else if(shape.type === 'TEXT' && shape.text) {
        await prisma.shape.update({
            where: {id: shapeId},
            data: {
                text: {
                    update: {
                        x: shape.text.x + dx,
                        y: shape.text.y + dy
                    }
                }
            }
        })
    }
}

async function applyResizeToShape(shapeId: number, shape: Shape) {
    if (shape.type === 'RECT' && shape.rect) {
        await prisma.rect.update({
            where: {rectId: shapeId},
            data: {
                x: shape.rect.x,
                y: shape.rect.y,
                width: shape.rect.width,
                height: shape.rect.height
            }
        })
    }

    else if (shape.type === 'CIRCLE' && shape.circle) {
        await prisma.circle.update({
            where: {circleId: shapeId},
            data: {
                x: shape.circle.x,
                y: shape.circle.y,
                radius: shape.circle.radius
            }
        })
    }

    else if (shape.type === 'LINE' && shape.line) {
        await prisma.line.update({
            where: {lineId: shapeId},
            data: {
                x1: shape.line.x1,
                y1: shape.line.y1,
                x2: shape.line.x2,
                y2: shape.line.y2
            }
        })
    }

    else if(shape.type === 'TEXT' && shape.text) {
        await prisma.text.update({
            where: {textId: shapeId},
            data: {
                x: shape.text.x,
                y: shape.text.y,
                text: shape.text.text,
                fontSize: shape.text.fontSize
            }
        })
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

        else if(parsedData.type === "leave_room"){
            const user = users.find(x => x.ws === ws);
            if( !user) {
                return;
            }
            user.rooms = user?.rooms.filter(x =>x !== parsedData.room)
        }

        else if(parsedData.type === "draw"){
            const roomId = parsedData.roomId;
            const shape = parsedData.message
            console.log("Shape Creating Log")
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
                    }),
                    ...(shape.type === "TEXT" && {
                        text: {
                            create: {
                                x: shape.text.x,
                                y: shape.text.y,
                                text: shape.text.text,
                                fontSize: shape.text.fontSize
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
                    },
                    text: true
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
                        },
                        text: true
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
                                }),
                                ...(shape.type === "TEXT" && {
                                    text: {
                                        create: {
                                            x: shape.text.x,
                                            y: shape.text.y,
                                            text: shape.text.text,
                                            fontSize: shape.text.fontSize
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
                                },
                                text: true
                            }
                        })
                    } catch (error) {
                        console.error("Undo error: ", error)
                    }
                        
                }
            }
            else if (lastAction.type === 'move'){
                // console.log("received undo move from client")
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
                const original = lastAction.shapes[1];

                if (!shapeId || !newShape || !original) return;

                try {
                    await applyResizeToShape(shapeId, newShape);
                }
                catch (error) {
                    console.error("Undo resize failed : ", error)
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
                                }),
                                ...(shape.type === "TEXT" && {
                                    text: {
                                        create: {
                                            x: shape.text.x,
                                            y: shape.text.y,
                                            text: shape.text.text,
                                            fontSize: shape.text.fontSize
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
                console.log("redo move called")
                const shapeId = redoAction.shapes[0]?.id;
                const dx = redoAction.dx ?? 0;
                const dy = redoAction.dy ?? 0;
                console.log("Action : ", shapeId, dx, dy)
                if (!shapeId) return;
                const shape = await prisma.shape.findUnique({
                    where: {
                        id: shapeId
                    },
                    include: {
                        rect: true,
                        circle: true,
                        line: true,
                        pencil: {
                            include  :{
                                points : true
                            }
                        },
                        text: true
                    }
                })

                if (!shape) return;
                console.log("Before Redo Move Shape : ", shape.rect)

                try {
                    await applyMoveToShape(shapeId, -dx, -dy);
                } catch (error) {
                    console.error("Undo move failed : ", error)
                    return;
                }
                const movedShape = await prisma.shape.findUnique({
                    where: {
                        id: shapeId
                    },
                    include: {
                        rect: true,
                        circle: true,
                        line: true,
                        pencil: {
                            include  :{
                                points : true
                            }
                        },
                        text: true
                    }
                })
                if (!movedShape) return;
                console.log("After Redo Move Shape : ", movedShape.rect)
            }
            else if (redoAction.type === 'resize'){
                const shapeId = redoAction.shapes[0]?.id;
                const newShape = redoAction.shapes[0];
                const original = redoAction.shapes[1];

                if (!shapeId || !newShape || !original) return;

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

            const movedShape = await prisma.shape.findUnique({
                where: {id: shapeId},
                include: {
                    rect: true,
                    circle: true,
                    line: true,
                    pencil: {include: {points: true}},
                    text: true
                }
            });

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

            const resizedShape = await prisma.shape.findUnique({
                where: {id: shapeId},
                include: {
                    rect: true,
                    circle: true,
                    line: true,
                    pencil: {include: {points: true}},
                    text: true
                }
            });

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
    })
});
