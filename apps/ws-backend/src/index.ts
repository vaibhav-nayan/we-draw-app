import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

const server = http.createServer();

const io = new WebSocket.Server({server});

io.on('connection', (socket : WebSocketServer) => {
    console.log(`Client connected: ${socket}`);
});

server.listen(8080);