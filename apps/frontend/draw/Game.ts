import { getExistingShapes } from "./http-calls";
import { Shape } from "./index";
import { ToolType } from "@/components/Canvas";

export class Game {

        private canvas:HTMLCanvasElement;
        private ctx : CanvasRenderingContext2D
        private existingShapes : Shape[];
        private roomId : string
        socket : WebSocket
        private clicked: boolean;
        private startX : number;
        private startY : number;
        private tool : ToolType
    
    constructor (canvas : HTMLCanvasElement, roomId : string, socket : WebSocket) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!
        this.existingShapes = [];
        this.roomId = roomId
        this.socket = socket
        this.clicked = false;
        this.startX = 0;
        this.startY = 0;
        this.tool = 'PTR'
        this.init();
        this.initHandlers();
        this.initMouseHandlers();
    }

    destroy() {
        this.canvas.removeEventListener('mousedown', this.mouseDownHandler);
        this.canvas.removeEventListener('mousemove', this.mouseMoveHandler)
        this.canvas.removeEventListener('mouseup', this.mouseUpHandler)
    }

    setTool(tool: ToolType) {
        this.tool = tool;
    }

    async init () {
        this.existingShapes = await getExistingShapes(this.roomId);
        console.log(this.existingShapes)
        this.clearCanvas()
    }

    initHandlers () {
        this.socket.onmessage = (event) =>{
            const message = JSON.parse(event.data);
            if(message.type === "draw"){
                const shape = message.message;
                console.log("Message received")
                console.log(shape)
                this.existingShapes.push(shape);
                this.clearCanvas();
                // edge case: if i am drawing and someone adds a shape, my drawing will be gone for a sec
            }
        }
    }

    clearCanvas () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgb(15, 15, 15)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.existingShapes.forEach(shape =>{
            this.ctx.strokeStyle = 'white';
            if(shape.type === 'RECT') {
                if(shape.rect === undefined) return;
                this.ctx.strokeRect(shape.rect.x, shape.rect.y, shape.rect.width, shape.rect.height);
            }
            else if(shape.type === 'CIRCLE') {
                if(shape.circle === undefined) return;
                this.ctx.beginPath()
                this.ctx.arc(shape.circle.x, shape.circle.y, Math.abs(shape.circle.radius), 0 , 2 * Math.PI);
                this.ctx.stroke();
            }
            else if(shape.type === 'LINE') {
                if(shape.line === undefined) return;
                this.ctx.beginPath();
                this.ctx.moveTo(shape.line.x1, shape.line.y1);
                this.ctx.lineTo(shape.line.x2, shape.line.y2);
                this.ctx.stroke();
            }
        })
    }

    mouseDownHandler = (e : MouseEvent) => {
        this.clicked = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        if(this.tool === 'PTR'){
            this.canvas.style.cursor = 'grabbing';
        }
    }

    mouseMoveHandler = (e : MouseEvent) => {
        
        if(this.clicked){
            const width = e.clientX - this.startX;
            const height = e.clientY - this.startY;
            this.clearCanvas();
            this.ctx.strokeStyle = 'white';
            if(this.tool === 'RECT'){
                this.ctx.strokeRect(this.startX, this.startY, width, height);
            }
            else if(this.tool === 'CIRCLE'){
                this.ctx.beginPath();
                this.ctx.arc(this.startX + width / 2, this.startY + height / 2, Math.abs(width) / 2, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
            else if(this.tool === 'LINE') {
                this.ctx.beginPath();
                this.ctx.moveTo(this.startX, this.startY);
                this.ctx.lineTo(e.clientX, e.clientY);
                this.ctx.stroke();
            }
            else {
                this.canvas.style.cursor = 'grabbing';
            }
        }
    }

    mouseUpHandler = (e: MouseEvent) => {
        this.clicked = false;
        const width = e.clientX - this.startX;
        const height = e.clientY - this.startY;
        let shape : Shape | null = null;
        if(this.tool === 'RECT'){
            shape = {
                type: "RECT",
                rect: {
                    x: this.startX,
                    y: this.startY,
                    width: width,
                    height: height
                }
            } 
        }
        else if (this.tool === 'CIRCLE'){
            shape = {
                type: "CIRCLE",
                circle: {
                    x: this.startX + width / 2,
                    y: this.startY + height / 2,
                    radius: Math.abs(width) / 2
                }
            }
        }   
        else if (this.tool === 'LINE'){
            shape = {
                type: "LINE",
                line: {
                    x1: this.startX,
                    y1: this.startY,
                    x2: e.clientX,
                    y2: e.clientY
                }
            }
        }
        else {
            this.canvas.style.cursor = 'grab';
        }

        if(!shape) return;

        this.socket.send(JSON.stringify({
            type: "draw",
            message: JSON.stringify(shape),
            roomId: this.roomId
        }));
        this.existingShapes.push(shape)
        this.clearCanvas()
    }


    initMouseHandlers () {
        this.canvas.addEventListener('mousedown', this.mouseDownHandler);
        this.canvas.addEventListener('mousemove', this.mouseMoveHandler)
        this.canvas.addEventListener('mouseup', this.mouseUpHandler)
    }
}