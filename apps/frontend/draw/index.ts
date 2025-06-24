import axios from "axios";
import { BACKEND_URL } from "@repo/common/config";


export type Shape = {
    type: "RECT"
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }
} | {
    type: "CIRCLE"
    circle: {
        x: number;
        y: number;
        radius: number;
    }
} | {
    type: "LINE"
    line: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }
}


export const drawInit = async (canvas : HTMLCanvasElement, roomId : string, socket: WebSocket, getTool: () => string) : Promise<() => void> =>{

    const existingShapes : Shape[] = await getExistingShapes({roomId});
    const ctx = canvas.getContext('2d');

    if(!ctx) return () =>{};
    console.log(getTool())
    socket.onmessage = (event) =>{
        const message = JSON.parse(event.data);
        if(message.type === "draw"){
            const shape = message.message;
            if (shape.type === "RECT") {
                existingShapes.push({
                    type: "RECT",
                    rect: {
                        x: shape.x,
                        y: shape.y,
                        width: shape.width,
                        height: shape.height
                    }
                });
            } else if (shape.type === "CIRCLE") {
                existingShapes.push({
                    type: "CIRCLE",
                    circle: {
                        x: shape.x,
                        y: shape.y,
                        radius: shape.radius
                    }
                });
            } else if (shape.type === "LINE") {
                existingShapes.push({
                    type: "LINE",
                    line: {
                        x1: shape.x1,
                        y1: shape.y1,
                        x2: shape.x2,
                        y2: shape.y2
                    }
                });
            }
            clearCanvas(existingShapes, ctx, canvas);
            // edge case: if i am drawing and someone adds a shape, my drawing will be gone for a sec
        }
    }

    clearCanvas(existingShapes, ctx, canvas);

    let clicked = false;
    let startX = 0;
    let startY = 0;

    const mouseDownHandler = (e : MouseEvent) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
    }

    const mouseMoveHandler = (e : MouseEvent) =>{
        if(clicked){
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            clearCanvas(existingShapes, ctx, canvas);
            ctx.strokeStyle = 'white';
            if(getTool() === 'RECT'){
                ctx.strokeRect(startX, startY, width, height);
            }
            else if(getTool() === 'CIRCLE'){
                ctx.beginPath();
                ctx.arc(startX + width / 2, startY + height / 2, Math.abs(width) / 2, 0, 2 * Math.PI);
                ctx.stroke();
            }
            else if(getTool() === 'LINE') {
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(e.clientX, e.clientY);
                ctx.stroke();
            }
        }
    }

    const mouseUpHandler = (e: MouseEvent) =>{
        clicked = false;
        const width = e.clientX - startX;
        const height = e.clientY - startY;
        let shape : Shape | null = null;
        if(getTool() === 'RECT'){
            shape = {
                type: "RECT",
                rect: {
                    x: startX,
                    y: startY,
                    width: width,
                    height: height
                }
            } 
        }
        else if (getTool() === 'CIRCLE'){
            shape = {
                type: "CIRCLE",
                circle: {
                    x: startX + width / 2,
                    y: startY + height / 2,
                    radius: Math.abs(width) / 2
                }
            }
        }   
        else if (getTool() === 'LINE'){
            shape = {
                type: "LINE",
                line: {
                    x1: startX,
                    y1: startY,
                    x2: e.clientX,
                    y2: e.clientY
                }
            }
        }

        if(!shape) return;

        socket.send(JSON.stringify({
            type: "draw",
            message: JSON.stringify(shape),
            roomId: roomId
        }));
        existingShapes.push(shape)
        clearCanvas(existingShapes, ctx, canvas)
    }

    canvas.addEventListener('mousedown', mouseDownHandler);
    canvas.addEventListener('mousemove', mouseMoveHandler)
    canvas.addEventListener('mouseup', mouseUpHandler)

    return () => {
        canvas.removeEventListener('mousedown', mouseDownHandler);
        canvas.removeEventListener('mousemove', mouseMoveHandler);
        canvas.removeEventListener('mouseup', mouseUpHandler);
    };
}

function clearCanvas(existingShapes: Shape[], ctx: CanvasRenderingContext2D ,canvas : HTMLCanvasElement){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(15, 15, 15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    existingShapes.forEach(shape =>{
        ctx.strokeStyle = 'white';
        if(shape.type === 'RECT') {
            if(shape.rect === undefined) return;
            ctx.strokeRect(shape.rect.x, shape.rect.y, shape.rect.width, shape.rect.height);
        }
        else if(shape.type === 'CIRCLE') {
            if(shape.circle === undefined) return;
            ctx.beginPath()
            ctx.arc(shape.circle.x, shape.circle.y, Math.abs(shape.circle.radius), 0 , 2 * Math.PI);
            ctx.stroke();
        }
        else if(shape.type === 'LINE') {
            if(shape.line === undefined) return;
            ctx.beginPath();
            ctx.moveTo(shape.line.x1, shape.line.y1);
            ctx.lineTo(shape.line.x2, shape.line.y2);
            ctx.stroke();
        }
    })
}


async function getExistingShapes ({roomId} : {
    roomId : string
}) {
    const res = await axios.get(`${BACKEND_URL}/shape/${roomId}`, {
        headers: {
            "Authorization" : localStorage.getItem('token')
        }
    });
    const messages = res.data.shapes;
    console.log("Existing Shapes fetched")
    console.log(messages)
    return messages;
}