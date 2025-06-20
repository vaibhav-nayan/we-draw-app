import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/backend-common/config"

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

    ws.on("message", function message(data) {
        const parsedData = JSON.parse(data.toString());

        if(parsedData.type === "join_room"){
            const user = users.find(x => x.ws === ws);
            user?.rooms.push(parsedData.roomId);
        }

        if(parsedData.type === "leave_room"){
            const user = users.find(x => x.ws === ws);
            if( !user) {
                return;
            }
            user.rooms = user?.rooms.filter(x =>x === parsedData.room)
        }

        if(parsedData.type === "chat"){
            const room = parsedData.roomId;
            const message = parsedData.message;

            //check about message long, slangy, etc.

            users.forEach(user =>{
                if(user.rooms.includes(room)){
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message: message,
                        roomId: room
                    }))
                }
            })
        }
    })
});
