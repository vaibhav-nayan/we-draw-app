import { getExistingShapes } from "./http-calls";
import { ToolType } from "@/components/Canvas";

const selectSVGUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3VzZS1wb2ludGVyMi1pY29uIGx1Y2lkZS1tb3VzZS1wb2ludGVyLTIiPjxwYXRoIGQ9Ik00LjAzNyA0LjY4OGEuNDk1LjQ5NSAwIDAgMSAuNjUxLS42NTFsMTYgNi41YS41LjUgMCAwIDEtLjA2My45NDdsLTYuMTI0IDEuNThhMiAyIDAgMCAwLTEuNDM4IDEuNDM1bC0xLjU3OSA2LjEyNmEuNS41IDAgMCAxLS45NDcuMDYzeiIvPjwvc3ZnPg=="
const pencilSVGUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wZW5jaWwtaWNvbiBsdWNpZGUtcGVuY2lsIj48cGF0aCBkPSJNMjEuMTc0IDYuODEyYTEgMSAwIDAgMC0zLjk4Ni0zLjk4N0wzLjg0MiAxNi4xNzRhMiAyIDAgMCAwLS41LjgzbC0xLjMyMSA0LjM1MmEuNS41IDAgMCAwIC42MjMuNjIybDQuMzUzLTEuMzJhMiAyIDAgMCAwIC44My0uNDk3eiIvPjxwYXRoIGQ9Im0xNSA1IDQgNCIvPjwvc3ZnPg=="
const eraserSVGUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1lcmFzZXItaWNvbiBsdWNpZGUtZXJhc2VyIj48cGF0aCBkPSJNMjEgMjFIOGEyIDIgMCAwIDEtMS40Mi0uNTg3bC0zLjk5NC0zLjk5OWEyIDIgMCAwIDEgMC0yLjgyOGwxMC0xMGEyIDIgMCAwIDEgMi44MjkgMGw1Ljk5OSA2YTIgMiAwIDAgMSAwIDIuODI4TDEyLjgzNCAyMSIvPjxwYXRoIGQ9Im01LjA4MiAxMS4wOSA4LjgyOCA4LjgyOCIvPjwvc3ZnPg=="

export type Shape = {
    id?: number
    type: "RECT"
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    selected? : boolean
} | {
    id?: number
    type: "CIRCLE"
    circle: {
        x: number;
        y: number;
        radius: number;
    }
    selected? : boolean
} | {
    id?: number
    type: "LINE"
    line: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }
    selected? : boolean
} | {
    id?: number
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
    private pencilPoints : {x: number; y: number; order: number}[] = []
    private eraserPoints : {x: number; y: number}[] = []
    
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
        if(tool === 'PTR') this.canvas.style.cursor = 'grab';
        else if(tool === 'ERASE') {
            this.canvas.style.cursor = `url(${eraserSVGUrl}) 0 0, auto`;
        }
        else if(tool === 'PENCIL') this.canvas.style.cursor = `url(${pencilSVGUrl}) 0 16, auto`;
        else if(tool === 'SELECT') this.canvas.style.cursor = `url(${selectSVGUrl}) 0 0, auto`;
        else this.canvas.style.cursor = 'crosshair'; 
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
            else if (message.type === "delete") {
                const idsToDelete = message.message;

                this.existingShapes = this.existingShapes.filter(shape =>{
                    !idsToDelete.includes(shape.id)
                })
                this.clearCanvas()
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
            else if (shape.type === 'PENCIL'){
                if(!shape.pencil.points || shape.pencil.points.length < 2) return;

                const sortedPoints = [...shape.pencil.points].sort((a, b) => a.order - b.order);

                this.ctx.beginPath();
                this.ctx.moveTo(this.toVirtualX(sortedPoints[0].x), this.toVirtualY(sortedPoints[0].y));
                for(let i =1; i<shape.pencil.points.length; i++){
                    this.ctx.lineTo(this.toVirtualX(sortedPoints[i].x), this.toVirtualY(sortedPoints[i].y));
                }
                this.ctx.stroke();
                if(shape.selected){
                    const xs = sortedPoints.map(p => p.x);
                    const ys = sortedPoints.map(p => p.y);
                    const minX = Math.min(...xs)
                    const minY = Math.min(...ys)
                    const maxX = Math.max(...xs)
                    const maxY = Math.max(...ys)
                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(this.toVirtualX(minX), this.toVirtualY(minY), (maxX - minX) * this.scale, (maxY - minY) * this.scale);
                }
            }
        })
    }

    isPointNearLine(px: number, py: number, x1: number, y1: number, x2: number, y2: number, tolerance: number) : boolean {
        const A = px - x1, B = py -y1;
        const C = x2 - x1, D = y2 - y1;
        const dot = A * C + B * D;
        const len_sq = C * C + D * D;
        let param = -1;

        if (len_sq != 0) param = dot/len_sq;

        let xx, yy;
        if(param < 0) {
            xx = x1; yy = y1;
        }
        else if (param > 1) {
            xx = x2;  yy = y2;
        }
        else {
            xx = x1 + param * C;
            yy = y1 + param * D;
        }

        const dx = px - xx;
        const dy = py - yy;
        return dx * dx + dy * dy <= tolerance * tolerance;
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
        else if (this.tool === 'PENCIL'){
            const x = this.toRealX(e.clientX);
            const y = this.toRealY(e.clientY);
            this.pencilPoints = [{x:x, y:y, order: 0}];
            this.ctx.beginPath();
            this.ctx.moveTo(this.toVirtualX(x), this.toVirtualY(y));
        }
        else if(this.tool === 'ERASE'){
            this.eraserPoints = [];
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
            if( this.tool === 'PENCIL'){
                const realX = this.toRealX(e.clientX);
                const realY = this.toRealY(e.clientY);
                this.pencilPoints.push({ x: realX, y: realY , order: this.pencilPoints.length});

                this.ctx.lineTo(this.toVirtualX(realX), this.toVirtualY(realY));
                this.ctx.stroke();
            }
            else if(this.tool === 'ERASE'){
                const realX = this.toRealX(e.clientX);
                const realY = this.toRealY(e.clientY)
                this.eraserPoints.push({x: realX, y: realY});

                this.clearCanvas();

                this.ctx.save();
                this.ctx.setLineDash([5, 5]);
                this.ctx.strokeStyle = 'red';
                this.ctx.beginPath();

                for(let i=0; i< this.eraserPoints.length; i++){
                    const {x, y} = this.eraserPoints[i];
                    const vx = this.toVirtualX(x);
                    const vy = this.toVirtualY(y);
                    if(i === 0) {
                        this.ctx.moveTo(vx, vy);
                    }
                    else {
                        this.ctx.lineTo(vx, vy);
                    }
                }

                this.ctx.stroke();
                this.ctx.restore();
            }
            else {
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
                        else if(shape.type === 'PENCIL'){
                            const points = shape.pencil?.points ?? [];
                            const xs = points.map(p => p.x);
                            const ys = points.map(p => p.y);
                            shapeStartX = Math.min(...xs);
                            shapeStartY = Math.min(...ys);
                            shapeEndX = Math.max(...xs);
                            shapeEndY = Math.max(...ys);
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
        else if( this.tool === 'PENCIL') {
            this.ctx.closePath();
            if (this.pencilPoints.length > 1) {
                shape = {
                    type: "PENCIL",
                    pencil : {
                        points: [...this.pencilPoints]
                    }
                };
            }
            this.pencilPoints = [];
        }
        else if (this.tool === 'ERASE'){
            const eraserRadius = 10;
            const shapesToKeep : Shape[] = [];
            const erasedShapes : Shape[] = [];

            for(const shape of this.existingShapes) {
                let shouldErase =  false;

                for(const {x : ex, y: ey} of this.eraserPoints) {
                    if(shape.type === 'PENCIL'){
                        if(shape.pencil.points.some(p => Math.hypot(p.x - ex, p.y - ey) <= eraserRadius)){
                            shouldErase = true;
                            break;
                        }
                    }
                    else if(shape.type === 'RECT') {
                        const {x, y, width, height} = shape.rect;
                        if(ex >= x - eraserRadius && ex <= x + width + eraserRadius &&
                            ey >= y - eraserRadius && ey <= y + height + eraserRadius
                        ) {
                            shouldErase = true;
                            break;
                        }
                    }
                    else if (shape.type === 'CIRCLE'){
                        const {x, y, radius} = shape.circle;
                        if(Math.hypot(ex - x, ey - y) <= radius + eraserRadius) {
                            shouldErase = true;
                            break;
                        }
                    }
                    else if (shape.type === 'LINE'){
                        const { x1, y1, x2, y2} = shape.line;
                        if (this.isPointNearLine(ex, ey, x1, y1, x2, y2, eraserRadius)) {
                            shouldErase = true;
                            break;
                        }
                    }
                }

                if (shouldErase) {
                    erasedShapes.push(shape);
                    this.socket.send(JSON.stringify({
                        type: "delete",
                        message: shape.id,
                        roomId : this.roomId
                    }));
                } else {
                    shapesToKeep.push(shape);
                }
            }

            this.existingShapes = shapesToKeep;
            if(erasedShapes.length > 0 ){
                // this.undoStack.push({ type: 'erase', shapes: erasedShapes})
                // this.redoStack = [];
            }

            this.clearCanvas()
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