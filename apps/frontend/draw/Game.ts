import { getExistingShapes } from "./http-calls";
import { ToolType } from "@/components/Canvas";

export type Shape = {
    type: "RECT"
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    selected? : boolean
} | {
    type: "CIRCLE"
    circle: {
        x: number;
        y: number;
        radius: number;
    }
    selected? : boolean
} | {
    type: "LINE"
    line: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }
    selected? : boolean
}

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
        private offsetX : number;
        private offsetY : number;
        private scale : number
        private cursorX : number = 0;
        private cursorY : number = 0;
        private prevCursorX : number = 0;
        private prevCursorY : number = 0;
        private middleMouseDown : boolean = false;
    
    constructor (canvas : HTMLCanvasElement, roomId : string, socket : WebSocket) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!
        this.existingShapes = [];
        this.roomId = roomId
        this.socket = socket
        this.clicked = false;
        this.startX = 0;
        this.startY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.scale = 1;
        this.tool = 'PTR'
        this.init();
        this.initHandlers();
        this.initMouseHandlers();
    }

    destroy() {
        this.canvas.removeEventListener('mousedown', this.mouseDownHandler);
        this.canvas.removeEventListener('mousemove', this.mouseMoveHandler);
        this.canvas.removeEventListener('mouseup', this.mouseUpHandler);
        this.canvas.removeEventListener('wheel', this.mouseWheelHandler);
    }

    setTool(tool: ToolType) {
        this.tool = tool;
        this.canvas.style.cursor = (tool === 'PTR')? 'grab' : 'crosshair';
    }

    toVirtualX(xReal : number) : number {
        return (xReal + this.offsetX) * this.scale;
    }

    toVirtualY(yReal : number) : number {
        return (yReal + this.offsetY) * this.scale;
    }

    toRealX(xVirtual : number) : number {
        return xVirtual / this.scale - this.offsetX;
    }

    toRealY(yVirtual : number) : number {
        return yVirtual / this.scale - this.offsetY;
    }

    vitualHeight () : number {
        return this.canvas.clientHeight / this.scale;
    }

    vitualWidth () : number {
        return this.canvas.clientWidth / this.scale;
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
        // Panning
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgb(15, 15, 15)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.existingShapes.forEach(shape =>{
            this.ctx.strokeStyle = 'white';
            this.ctx.lineWidth = 1;
            if(shape.type === 'RECT') {
                if(shape.rect === undefined) return;
                this.ctx.strokeRect(this.toVirtualX(shape.rect.x), this.toVirtualY(shape.rect.y), (shape.rect.width * this.scale), (shape.rect.height * this.scale));
                if(shape.selected) {
                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(this.toVirtualX(shape.rect.x), this.toVirtualY(shape.rect.y), (shape.rect.width * this.scale), (shape.rect.height * this.scale));
                }
            }
            else if(shape.type === 'CIRCLE') {
                if(shape.circle === undefined) return;
                this.ctx.beginPath()
                this.ctx.arc(this.toVirtualX(shape.circle.x), this.toVirtualY(shape.circle.y), Math.abs(shape.circle.radius) * this.scale , 0 , 2 * Math.PI);
                this.ctx.stroke();
                if(shape.selected) {
                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(this.toVirtualX(shape.circle.x - shape.circle.radius), this.toVirtualY(shape.circle.y - shape.circle.radius), (shape.circle.radius * 2 * this.scale), (shape.circle.radius * 2 * this.scale));
                    this.ctx.rect(this.toVirtualX(shape.circle.x - shape.circle.radius), this.toVirtualY(shape.circle.y - shape.circle.radius), 10, 10);
                }
            }
            else if(shape.type === 'LINE') {
                if(shape.line === undefined) return;
                this.ctx.beginPath();
                this.ctx.moveTo(this.toVirtualX(shape.line.x1), this.toVirtualY(shape.line.y1));
                this.ctx.lineTo(this.toVirtualX(shape.line.x2), this.toVirtualY(shape.line.y2));
                this.ctx.stroke();
                if(shape.selected){
                    const lineStartX = Math.min(shape.line.x1, shape.line.x2);
                    const lineStartY = Math.min(shape.line.y1, shape.line.y2);
                    const lineEndX = Math.max(shape.line.x1, shape.line.x2);
                    const lineEndY = Math.max(shape.line.y1, shape.line.y2);
                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(this.toVirtualX(lineStartX), this.toVirtualY(lineStartY), (lineEndX - lineStartX) * this.scale, (lineEndY - lineStartY) * this.scale);
                }
            }
        })
    }

    mouseDownHandler = (e : MouseEvent) => {
        this.clicked = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.cursorX = e.pageX;
        this.cursorY = e.pageY;
        this.prevCursorX = e.pageX;
        this.prevCursorY = e.pageY;
        if(e.button === 1){
            this.canvas.style.cursor = 'grabbing';
            this.middleMouseDown = true;
            e.preventDefault()
        }
        if(this.tool === 'SELECT'){
            this.existingShapes.forEach(shape => {
                shape.selected = false;
            })
        }
    }

    mouseMoveHandler = (e : MouseEvent) => {
        this.cursorX = e.pageX;
        this.cursorY = e.pageY;
        if(this.middleMouseDown){
            this.offsetX += ((this.cursorX - this.prevCursorX) / this.scale);
            this.offsetY += ((this.cursorY - this.prevCursorY) / this.scale);
            this.clearCanvas();
            this.prevCursorX = e.pageX;
            this.prevCursorY = e.pageY;
        }
        else if(this.clicked){
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
            else if (this.tool === 'SELECT'){
                this.ctx.setLineDash([5, 5]);
                this.ctx.strokeRect(this.startX, this.startY, width, height);
                this.existingShapes.forEach(shape => {
                    let shapeStartX = 0;
                    let shapeStartY = 0;
                    let shapeEndX = 0;
                    let shapeEndY = 0;
                    if(shape.type === 'RECT') {
                        if(shape.rect === undefined) return;
                        shapeStartX = shape.rect.x;
                        shapeStartY = shape.rect.y;
                        shapeEndX = shape.rect.x + shape.rect.width;
                        shapeEndY = shape.rect.y + shape.rect.height;
                    }
                    else if(shape.type === 'CIRCLE') {
                        if(shape.circle === undefined) return;
                        shapeStartX = shape.circle.x - shape.circle.radius;
                        shapeStartY = shape.circle.y - shape.circle.radius;
                        shapeEndX = shape.circle.x + shape.circle.radius;
                        shapeEndY = shape.circle.y + shape.circle.radius;
                    }
                    else if(shape.type === 'LINE') {
                        if(shape.line === undefined) return;
                        shapeStartX = Math.min(shape.line.x1, shape.line.x2);
                        shapeStartY = Math.min(shape.line.y1, shape.line.y2);
                        shapeEndX = Math.max(shape.line.x1, shape.line.x2);
                        shapeEndY = Math.max(shape.line.y1, shape.line.y2);
                    }
                    const trueSelectStartX = this.toRealX(this.startX);
                    const trueSelectStartY = this.toRealY(this.startY);
                    const trueSelectEndX = this.toRealX(this.startX + width);
                    const trueSelectEndY = this.toRealY(this.startY + height);
                    if(shapeStartX >= trueSelectStartX && shapeEndX <= trueSelectEndX && shapeStartY >= trueSelectStartY && shapeEndY <= trueSelectEndY){
                        this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                        this.ctx.lineWidth = 0.5;
                        this.ctx.strokeRect(this.toVirtualX(shapeStartX), this.toVirtualY(shapeStartY), (shapeEndX - shapeStartX)*this.scale, (shapeEndY - shapeStartY)*this.scale);
                        this.ctx.rect(this.toVirtualX(shapeStartX-5), this.toVirtualY(shapeStartY-5), 10, 10);
                        shape.selected = true;
                    }
                    else {
                        this.ctx.strokeStyle = 'white';
                        shape.selected = false;
                    }
                })
            }
            else {
                this.canvas.style.cursor = 'grabbing';
                this.offsetX += ((this.cursorX - this.prevCursorX) / this.scale);
                this.offsetY += ((this.cursorY - this.prevCursorY) / this.scale);
                this.clearCanvas();
                this.prevCursorX = e.pageX;
                this.prevCursorY = e.pageY;
            }
        }
    }

    mouseUpHandler = (e: MouseEvent) => {
        this.clicked = false;

        const trueStartX = this.toRealX(this.startX);
        const trueStartY = this.toRealY(this.startY);
        const trueEndX = this.toRealX(e.clientX);
        const trueEndY = this.toRealY(e.clientY);

        const width = trueEndX - trueStartX;
        const height = trueEndY - trueStartY;
        let shape : Shape | null = null;
        if(e.button === 1){
            this.middleMouseDown = false;
            this.canvas.style.cursor = 'crosshair';
        }
        else if(this.tool === 'RECT'){
            shape = {
                type: "RECT",
                rect: {
                    x: trueStartX,
                    y: trueStartY,
                    width: width,
                    height: height
                }
            } 
        }
        else if (this.tool === 'CIRCLE'){
            shape = {
                type: "CIRCLE",
                circle: {
                    x: trueStartX + width / 2,
                    y: trueStartY + height / 2,
                    radius: Math.abs(width) / 2
                }
            }
        }   
        else if (this.tool === 'LINE'){
            shape = {
                type: "LINE",
                line: {
                    x1: trueStartX,
                    y1: trueStartY,
                    x2: trueEndX,
                    y2: trueEndY
                }
            }
        }
        else if (this.tool === 'SELECT'){
            console.log(trueStartX, trueStartY, trueEndX, trueEndY)
            this.clearCanvas();
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

    mouseWheelHandler = (e : WheelEvent) => {
        console.log("Mouse scroll happened")
        const deltaY = e.deltaY;
        const scaleAmount = -deltaY / 500;
        this.scale = this.scale * (1+scaleAmount);;

        var distX = e.pageX / this.canvas.clientWidth;
        var distY = e.pageY / this.canvas.clientHeight;

        const unitsZoomedX = this.vitualWidth() * scaleAmount;
        const unitsZoomedY  = this.vitualHeight() * scaleAmount;

        const unitsAddLeft = unitsZoomedX * distX;
        const unitsAddTop = unitsZoomedY * distY;

        this.offsetX -= unitsAddLeft;
        this.offsetY -= unitsAddTop;

        this.clearCanvas();
    }

    initMouseHandlers () {
        this.canvas.addEventListener('mousedown', this.mouseDownHandler);
        this.canvas.addEventListener('mousemove', this.mouseMoveHandler);
        this.canvas.addEventListener('mouseup', this.mouseUpHandler);
        this.canvas.addEventListener('wheel' , this.mouseWheelHandler);
    }
}