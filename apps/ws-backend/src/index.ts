import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/backend-common/config"
import prisma from '@repo/db/client'

interface User {
    userId : string,
    rooms : string[], 
    ws : WebSocket
}

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
            const parsedShape = JSON.parse(parsedData.message);
            const shape = parsedShape.shape;
            //check about message long, slangy, etc.
            console.log("parsedData.message is this")
            console.log(parsedData.message)
            console.log("parsedShape is this")
            console.log(parsedShape)
            console.log("This is the shape object")
            console.log(shape)

            await prisma.shape.create({
                data: {
                    userId: userId,
                    roomId: parseInt(roomId),
                    type: shape.type,
                    ...(shape.type === "RECT" && {
                    rect: {
                        create: {
                        x: shape.x,
                        y: shape.y,
                        width: shape.width,
                        height: shape.height
                        }
                    }
                    }),
                    ...(shape.type === "CIRCLE" && {
                    circle: {
                        create: {
                        x: shape.x,
                        y: shape.y,
                        radius: shape.radius
                        }
                    }
                    }),
                    ...(shape.type === "LINE" && {
                    line: {
                        create: {
                        x1: shape.x1,
                        y1: shape.y1,
                        x2: shape.x2,
                        y2: shape.y2
                        }
                    }
                    })
                },
                include: {
                    rect: true,
                    circle: true,
                    line: true
                }
            })

            users.forEach(user =>{
                if(user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type: "draw",
                        message: parsedData.message,
                        roomId: roomId
                    }))
                }
            })
        }
    })
});
