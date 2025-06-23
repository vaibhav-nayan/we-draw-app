import axios from "axios";
import { BACKEND_URL } from "@repo/common/config";

type Shape = {
    type: "rect";
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    type : "circle";
    centreX : number;
    centreY : number;
    radius: number;
};

export const drawInit = (canvas : HTMLCanvasElement) =>{

    const existingShapes : Shape[] = [];
    const ctx = canvas.getContext('2d');

    if(!ctx) return;
    ctx.fillStyle = 'rgb(15, 15, 15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener('mousedown', (e) =>{
        clicked = true;
        startX = (e.clientX)
        startY = (e.clientY)
    })

    canvas.addEventListener('mousemove', (e) =>{
        if(clicked){
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            clearCanvas(existingShapes, ctx, canvas);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(startX, startY, width, height);
        }
    })

    canvas.addEventListener('mouseup', (e) =>{
        clicked = false;
        const width = e.clientX - startX;
        const height = e.clientY - startY;
        existingShapes.push({
            type: "rect",
            x: startX,
            y: startY,
            width: width,
            height: height
        })
    })
}

function clearCanvas(existingShapes: Shape[], ctx: CanvasRenderingContext2D ,canvas : HTMLCanvasElement){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(15, 15, 15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    existingShapes.forEach(shape =>{
        if(shape.type === "rect"){
            ctx.strokeStyle = 'white';
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
    })
}

async function getExistingShapes ({roomId} : {
    roomId : string
}) {
    const res = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
    
}