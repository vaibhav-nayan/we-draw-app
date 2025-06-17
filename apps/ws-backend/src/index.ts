import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

const server = http.createServer();

const wss = new WebSocketServer({server});

wss.on('connection', (ws) => {
    
    ws.on("message", function message(data) {
        ws.send("pong");
    })
});

server.listen(8080);