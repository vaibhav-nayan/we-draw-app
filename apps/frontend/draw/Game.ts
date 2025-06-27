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
    clientId? : string
    selected? : boolean
} | {
    id?: number
    type: "CIRCLE"
    circle: {
        x: number;
        y: number;
        radius: number;
    }
    clientId? : string
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
    clientId? : string
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
    clientId? : string
    selected? : boolean
}

export type Action = {
    type : "draw" | "delete" | "move",
    dx? : number,
    dy? : number,
    shapes: Shape[],
    userId? : string,
    timestamp : number       
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
    private MAX_STACK_SIZE : number = 100;
    private undoStack : Record<string, Action[]> = {};
    private redoStack : Record<string, Action[]> = {};
    private activeTransform = {
        type : null as "move" | null,
        shapeId : null as number | null,
        startX : 0,
        startY : 0,
        original: null as Shape | null
    }

    private applyMoveLocally(shapeId: number, dx: number, dy: number) {
        console.log("applyMoveLocally reached")
        const shape = this.existingShapes.find(s => s.id === shapeId);
        console.log("Apply move locally log")
        console.log(shape)
        if (!shape) return;

        if (shape.type === "RECT" && shape.rect) {
            shape.rect.x += dx;
            shape.rect.y += dy;
        } else if (shape.type === "CIRCLE" && shape.circle) {
            shape.circle.x += dx;
            shape.circle.y += dy;
        } else if (shape.type === "LINE" && shape.line) {
            shape.line.x1 += dx;
            shape.line.y1 += dy;
            shape.line.x2 += dx;
            shape.line.y2 += dy;
        } else if (shape.type === "PENCIL" && shape.pencil && shape.pencil.points) {
            shape.pencil.points.forEach(point => {
            point.x += dx;
            point.y += dy;
            });
        }

        this.clearCanvas(); 
    }

    private saveActionForUndo (stack: Record<string, Action[]> , roomId: string, action: Action){
        if(!stack[roomId]) stack[roomId] = [];
        stack[roomId].push(action)

        if(stack[roomId].length > this.MAX_STACK_SIZE) {
            stack[roomId].shift()
        }
    }

    private undo = (roomId: string) => {
        const stack = this.undoStack[roomId];
        console.log("undo Logs")
        console.log(stack)
        if(!stack || stack.length === 0) return;

        const action = stack.pop();
        console.log(action)
        if(!action) return;

        // PUSHING INTO REDO STACK
        if(!this.redoStack[roomId]){
            this.redoStack[roomId] = [];
        }
        if(action.type === 'move'){
            this.redoStack[roomId] = this.redoStack[roomId] || [];
            this.redoStack[roomId].push(action)
        }
        else {
            const newAction: Action = {
                type: action.type === "draw" ? "delete" : "draw",
                shapes: action.shapes,
                timestamp: Date.now()
            }
            this.redoStack[roomId].push(newAction)
        }

        // UPDATING EXISTING SHAPES
        if (action.type === "draw") {
            const idsToDelete = action.shapes.map(s => s.id);
            this.existingShapes = this.existingShapes.filter(
                s => !idsToDelete.includes(s.id!)
            )
        } else if (action.type === "delete") {
            this.existingShapes.push(...action.shapes);
        } else if (action.type === 'move'){
            console.log("move block reached")
            const shapeId = action.shapes[0].id;
            const dx = action.dx;
            const dy = action.dy;
            console.log(shapeId, dx, dy)
            if(!shapeId || !dx || !dy) return;
            this.applyMoveLocally(shapeId , -dx, -dy)
        }

        
        // UPDATING SERVER
        this.socket.send(JSON.stringify({
            type: "undo",
            message: action,
            roomId : this.roomId
        }));
        this.clearCanvas();
    }

    private redo = (roomId : string) => {
        const stack = this.redoStack[roomId];
        if(!stack || stack.length === 0) return;

        const action = stack.pop();
        if(!action) return;
        if(!this.undoStack[roomId]){
            this.undoStack[roomId] = [];
        }
        if(action.type === 'move'){
            if (!action.dx || !action.dy) return;
            const ndx = -action.dx;
            const ndy = -action.dy;
            console.log(action.dx, action.dy, ndx, ndy)
            this.undoStack[roomId] = this.undoStack[roomId] || [];
            this.undoStack[roomId].push({
                type: "move",
                shapes: action.shapes,
                dx: action.dx!,
                dy: action.dy!,
                timestamp: Date.now()
            })
        }
        else {this.undoStack[roomId].push({
            type: action.type === "draw" ? "delete" : "draw",
            shapes: action.shapes,
            timestamp: Date.now()
        })}

        if (action.type === "draw") {
            const idsToDelete = action.shapes.map(s => s.id);
            this.existingShapes = this.existingShapes.filter(
                s => !idsToDelete.includes(s.id!)
            )
        } else if (action.type === "delete") {
            this.existingShapes.push(...action.shapes);
        } 
        if (action.type === 'move'){

            const shapeId = action.shapes[0].id;
            const dx = action.dx;
            const dy = action.dy;
            if(!shapeId || !dx || !dy) return;
            this.applyMoveLocally(shapeId , -dx, -dy)
        }

        this.clearCanvas();

        this.socket.send(JSON.stringify({
            type: "redo",
            message: action,
            roomId : this.roomId
        }));
    }

    private isPointNearLine(px: number, py: number, x1: number, y1: number, x2: number, y2: number, tolerance: number) : boolean {
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

    private toVirtualX(xReal : number) : number {
        return (xReal + this.offsetX) * this.scale;
    }

    private toVirtualY(yReal : number) : number {
        return (yReal + this.offsetY) * this.scale;
    }

    

    private toRealX(xVirtual : number) : number {
        return xVirtual / this.scale - this.offsetX;
    }

    private toRealY(yVirtual : number) : number {
        return yVirtual / this.scale - this.offsetY;
    }

    

    private vitualHeight () : number {
        return this.canvas.clientHeight / this.scale;
    }

    private vitualWidth () : number {
        return this.canvas.clientWidth / this.scale;
    }

    private tooVirtualX(xReal : number) : number {
        return (xReal - this.offsetX) * this.scale;
    }

    private tooVirtualY(yReal : number) : number {
        return (yReal - this.offsetY) * this.scale;
    }

    private tooRealX(xVirtual : number) : number {
        return xVirtual / this.scale + this.offsetX;
    }

    private tooRealY(yVirtual : number) : number {
        return yVirtual / this.scale + this.offsetY;
    }

    private getHoveredHandleOrShape(x: number, y: number): { type: 'handle' | 'shape' | 'none', cursor?: string } {
        const virtualX = this.tooVirtualX(x); // from screen to world
        const virtualY = this.tooVirtualY(y);
        const handleSize = 8;
        const half = handleSize / this.scale / 2; // important: adjust for zoom

        for (const shape of this.existingShapes) {
            if (!shape.selected) continue;

            const { rx, ry, rw, rh } = this.getBoundingBoxFromShape(shape);

            const corners = [
                { x: rx,         y: ry,         cursor: 'nwse-resize' }, // top-left
                { x: rx + rw,    y: ry,         cursor: 'nesw-resize' }, // top-right
                { x: rx,         y: ry + rh,    cursor: 'nesw-resize' }, // bottom-left
                { x: rx + rw,    y: ry + rh,    cursor: 'nwse-resize' }  // bottom-right
            ];

            for (const corner of corners) {
                if (
                    virtualX >= corner.x - half && virtualX <= corner.x + half &&
                    virtualY >= corner.y - half && virtualY <= corner.y + half
                )
                {
                    return { type: 'handle', cursor: corner.cursor };
                }
            }

            if (
                virtualX >= rx && virtualX <= rx + rw &&
                virtualY >= ry && virtualY <= ry + rh
            )
            {
                return { type: 'shape' };
            }
        }

        return { type: 'none' };
    }


    private getBoundingBoxFromShape(shape: Shape): { rx: number, ry: number, rw: number, rh: number } {
        if (shape.type === 'RECT' && shape.rect) {
            return {
                rx: shape.rect.x,
                ry: shape.rect.y,
                rw: shape.rect.width,
                rh: shape.rect.height
            };
        }
        if (shape.type === 'CIRCLE' && shape.circle) {
            const { x, y, radius } = shape.circle;
            return {
                rx: x - radius,
                ry: y - radius,
                rw: radius * 2,
                rh: radius * 2
            };
        }
        if (shape.type === 'LINE' && shape.line) {
            const minX = Math.min(shape.line.x1, shape.line.x2);
            const minY = Math.min(shape.line.y1, shape.line.y2);
            const maxX = Math.max(shape.line.x1, shape.line.x2);
            const maxY = Math.max(shape.line.y1, shape.line.y2);
            return {
                rx: minX,
                ry: minY,
                rw: maxX - minX,
                rh: maxY - minY
            };
        }
        if (shape.type === 'PENCIL' && shape.pencil.points.length >= 2) {
            const xs = shape.pencil.points.map(p => p.x);
            const ys = shape.pencil.points.map(p => p.y);
            const minX = Math.min(...xs);
            const minY = Math.min(...ys);
            const maxX = Math.max(...xs);
            const maxY = Math.max(...ys);
            return {
                rx: minX,
                ry: minY,
                rw: maxX - minX,
                rh: maxY - minY
            };
        }
        return { rx: 0, ry: 0, rw: 0, rh: 0 };
    }

    
    private getShapeAt(x : number, y: number) : Shape | null {
        for(let i=this.existingShapes.length-1 ; i>=0; i--){
            const shape = this.existingShapes[i];

            if(shape.type === 'RECT') {
                // console.log("check rectangles")
                // console.log(shape.rect)
                // console.log(x, y)
                // console.log(shape)
                const {x: sx, y: sy, width, height} = shape.rect;
                if(x >= sx && x<= sx+width && y>=sy && y<=sy+height) {
                    console.log("shape found")
                    console.log(shape)
                    return shape;
                }
            }

            else if (shape.type === 'CIRCLE'){
                const {x: cx, y:cy, radius} = shape.circle;
                const distance = Math.hypot(x-cx , y-cy);
                if(distance <= radius) {
                    return shape;
                }
            }

            else if (shape.type === 'LINE'){
                const {x1, y1, x2, y2} = shape.line;
                if( this.isPointNearLine(x, y, x1, y1, x2, y2, 5)){
                    return shape;
                }
            }

            else if (shape.type ===  'PENCIL'){
                for (const point of shape.pencil.points) {
                    if (Math.hypot(point.x - x, point.y - y) <= 5) {
                        return shape;
                    }
                }
            }
        }
        return null;
    }

    private copyShape(shape: Shape) : Shape {
        return JSON.parse(JSON.stringify(shape))
    }

    private createRect(startX: number, startY: number, endX: number, endY: number) : Shape {
        return {
            type: "RECT",
            rect: {
                x: startX,
                y: startY,
                width: endX - startX,
                height: endY - startY
            }
        };
    }

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
        this.initKeyboardHandlers();
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
            this.canvas.style.cursor = `url(${eraserSVGUrl}) 0 16, auto`;
        }
        else if(tool === 'PENCIL') this.canvas.style.cursor = `url(${pencilSVGUrl}) 0 16, auto`;
        else if(tool === 'SELECT') this.canvas.style.cursor = `url(${selectSVGUrl}) 0 0, auto`;
        else this.canvas.style.cursor = 'crosshair'; 
    }

    async init () {
        this.existingShapes = await getExistingShapes(this.roomId);
        // console.log(this.existingShapes)
        this.clearCanvas()
    }

    initHandlers () {
        this.socket.onmessage = (event) =>{
            const message = JSON.parse(event.data);
            if(message.type === "confirm-draw"){
                // console.log(message.message)
                const {clientId, serverId, shape} = message.message;
                const shapeIndex = this.existingShapes.findIndex(s => s.clientId === clientId);

                if (shapeIndex !== -1) {

                    // LOCAL SHAPE
                    this.existingShapes[shapeIndex].id = serverId;
                    this.saveActionForUndo(this.undoStack, this.roomId,{
                        type: "draw",
                        shapes: [{...shape, id: serverId}],
                        timestamp: Date.now()
                    })
                    console.log("Frontend Stacks")
                    console.log(this.undoStack[this.roomId])
                    console.log(this.redoStack[this.roomId])
                    this.clearCanvas()
                }
                else {

                    // REMOTE SHAPE
                    this.saveActionForUndo(this.undoStack, this.roomId,{
                        type: "draw",
                        shapes: [{...shape, id: serverId}],
                        timestamp: Date.now()
                    })
                    this.existingShapes.push({
                        ...shape,
                        id: serverId
                    });
                    this.clearCanvas();
                }
                // edge case: if i am drawing and someone adds a shape, my drawing will be gone for a sec
            }
            else if (message.type === "confirm-delete") {
                const idsToDelete = message.message;
                // console.log(idsToDelete)
                this.existingShapes = this.existingShapes.filter(shape =>{
                    return !idsToDelete.includes(shape.id)
                })
                // console.log(this.existingShapes)
                this.clearCanvas()
            }
            else if(message.type === "undo" || message.type === "redo") {
                const action: Action = message.message;

                if(action.type === 'draw'){
                    this.existingShapes = this.existingShapes.filter(
                        s => !(action.shapes as Shape[]).some(a => a.id === s.id)
                    );
                }
                else if (action.type === 'delete') {
                    this.existingShapes.push(...action.shapes);
                }

                this.clearCanvas();
            }
            else if(message.type === 'confirm-move') {
                const {shapeId, dx, dy} = message.message;
                const shape = this.existingShapes.find(s => s.id === shapeId);

                if(!shape) return;
                if (shape.type === 'RECT') {
                    shape.rect.x += dx;
                    shape.rect.y += dy;
                }
                else if (shape.type === 'CIRCLE') {
                    shape.circle.x += dx;
                    shape.circle.y += dy;
                }
                else if (shape.type === 'LINE') {
                    shape.line.x1 += dx;
                    shape.line.y1 += dy;
                    shape.line.x2 += dx;
                    shape.line.y2 += dy;
                }
                else if(shape.type === 'PENCIL') {
                    shape.pencil.points.forEach(point => {
                        point.x += dx;
                        point.y += dy;
                    });
                }
                this.clearCanvas();
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
                if (shape.rect === undefined) return;
                const vx = this.toVirtualX(shape.rect.x);
                const vy = this.toVirtualY(shape.rect.y);
                const vw = shape.rect.width * this.scale;
                const vh = shape.rect.height * this.scale;

                this.ctx.strokeRect(vx, vy, vw, vh);

                if (shape.selected) {
                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(vx, vy, vw, vh);

                    // Draw corner handles
                    const handleSize = 8, half = handleSize / 2;
                    const corners = [
                        { x: vx,         y: vy },          // top-left
                        { x: vx + vw,    y: vy },          // top-right
                        { x: vx,         y: vy + vh },     // bottom-left
                        { x: vx + vw,    y: vy + vh }      // bottom-right
                    ];
                    this.ctx.fillStyle = 'rgb(0, 188, 212)';
                    corners.forEach(c => this.ctx.fillRect(c.x - half, c.y - half, handleSize, handleSize));
                }
            }
            else if(shape.type === 'CIRCLE') {
                if (shape.circle === undefined) return;
                const { x, y, radius } = shape.circle;
                const cx = this.toVirtualX(x);
                const cy = this.toVirtualY(y);
                const cr = Math.abs(radius) * this.scale;

                this.ctx.beginPath();
                this.ctx.arc(cx, cy, cr, 0, 2 * Math.PI);
                this.ctx.stroke();

                if (shape.selected) {
                    const vx = this.toVirtualX(x - radius);
                    const vy = this.toVirtualY(y - radius);
                    const vw = radius * 2 * this.scale;
                    const vh = radius * 2 * this.scale;

                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(vx, vy, vw, vh);

                    // Draw corner handles
                    const handleSize = 8, half = handleSize / 2;
                    const corners = [
                        { x: vx,         y: vy },          // top-left
                        { x: vx + vw,    y: vy },          // top-right
                        { x: vx,         y: vy + vh },     // bottom-left
                        { x: vx + vw,    y: vy + vh }      // bottom-right
                    ];
                    this.ctx.fillStyle = 'rgb(0, 188, 212)';
                    corners.forEach(c => this.ctx.fillRect(c.x - half, c.y - half, handleSize, handleSize));
                }
            }
            else if(shape.type === 'LINE') {
                if (shape.line === undefined) return;
                const { x1, y1, x2, y2 } = shape.line;
                this.ctx.beginPath();
                this.ctx.moveTo(this.toVirtualX(x1), this.toVirtualY(y1));
                this.ctx.lineTo(this.toVirtualX(x2), this.toVirtualY(y2));
                this.ctx.stroke();

                if (shape.selected) {
                    const minX = Math.min(x1, x2), minY = Math.min(y1, y2);
                    const maxX = Math.max(x1, x2), maxY = Math.max(y1, y2);
                    const vx = this.toVirtualX(minX);
                    const vy = this.toVirtualY(minY);
                    const vw = (maxX - minX) * this.scale;
                    const vh = (maxY - minY) * this.scale;

                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(vx, vy, vw, vh);

                    // Draw corner handles
                    const handleSize = 8, half = handleSize / 2;
                    const corners = [
                        { x: vx,         y: vy },
                        { x: vx + vw,    y: vy },
                        { x: vx,         y: vy + vh },
                        { x: vx + vw,    y: vy + vh }
                    ];
                    this.ctx.fillStyle = 'rgb(0, 188, 212)';
                    corners.forEach(c => this.ctx.fillRect(c.x - half, c.y - half, handleSize, handleSize));
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
                    const minX = Math.min(...xs), minY = Math.min(...ys);
                    const maxX = Math.max(...xs), maxY = Math.max(...ys);
                    const vx = this.toVirtualX(minX);
                    const vy = this.toVirtualY(minY);
                    const vw = (maxX - minX) * this.scale;
                    const vh = (maxY - minY) * this.scale;

                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(vx, vy, vw, vh);

                    // Draw corner handles
                    const handleSize = 8, half = handleSize / 2;
                    const corners = [
                        { x: vx,         y: vy },
                        { x: vx + vw,    y: vy },
                        { x: vx,         y: vy + vh },
                        { x: vx + vw,    y: vy + vh }
                    ];
                    this.ctx.fillStyle = 'rgb(0, 188, 212)';
                    corners.forEach(c => this.ctx.fillRect(c.x - half, c.y - half, handleSize, handleSize));
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

        const realX = this.toRealX(e.clientX);
        const realY = this.toRealY(e.clientY)

        const hoveredShape = this.getShapeAt(realX, realY);
        // console.log(hoveredShape)
        if (hoveredShape && hoveredShape.selected) {
            this.activeTransform = {
                type : "move",
                shapeId: hoveredShape.id!, 
                startX : realX,
                startY : realY,
                original: this.copyShape(hoveredShape)
            }
        }
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

        if(this.tool === 'SELECT'){
            const virtualX = this.toVirtualX(e.clientX);
            const virtualY = this.toVirtualY(e.clientY);

            const hovered = this.getHoveredHandleOrShape(virtualX, virtualY);
            if (hovered.type === 'handle') {
                this.canvas.style.cursor = hovered.cursor!;
            } else if (hovered.type === 'shape') {
                this.canvas.style.cursor = 'move';
            }
            else {
                this.canvas.style.cursor = `url(${selectSVGUrl}) 0 0, auto`;
            }
        }
        
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
                    if (this.activeTransform.type === "move"){

                        const realX = this.toRealX(e.clientX);
                        const realY = this.toRealY(e.clientY);
                        const dx = realX - this.activeTransform.startX;
                        const dy = realY - this.activeTransform.startY;

                        const shape = this.existingShapes.find(s => s.id === this.activeTransform.shapeId);
                        if (!shape) return;

                        const original : Shape = this.activeTransform.original as Shape;
                        
                        if (shape.type === 'RECT' && original.type === 'RECT') {
                            shape.rect.x = original.rect.x + dx;
                            shape.rect.y = original.rect.y + dy;
                        } 
                        else if (shape.type === 'CIRCLE' && original.type === 'CIRCLE') {
                            shape.circle.x = original.circle.x + dx;
                            shape.circle.y = original.circle.y + dy;
                        }
                        else if (shape.type === "LINE" && original.type === 'LINE') {
                            shape.line.x1 = original.line.x1 + dx;
                            shape.line.y1 = original.line.y1 + dy;
                            shape.line.x2 = original.line.x2 + dx;
                            shape.line.y2 = original.line.y2 + dy;
                        }
                        else if (shape.type === 'PENCIL' && original.type === 'PENCIL') {
                            shape.pencil.points = original.pencil.points.map(p => ({
                                ...p,
                                x : p.x + dx,
                                y : p.y + dy
                            }));
                        }

                        this.clearCanvas();
                    }
                    else {
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

                            if (
                                shapeStartX >= trueSelectStartX &&
                                shapeEndX <= trueSelectEndX &&
                                shapeStartY >= trueSelectStartY &&
                                shapeEndY <= trueSelectEndY
                            ) {
                                // Compute virtual coords and dimensions
                                const vx = this.toVirtualX(shapeStartX);
                                const vy = this.toVirtualY(shapeStartY);
                                const vwidth = (shapeEndX - shapeStartX) * this.scale;
                                const vheight = (shapeEndY - shapeStartY) * this.scale;

                                // Draw dashed bounding box
                                this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                                this.ctx.lineWidth = 0.8;
                                this.ctx.setLineDash([4, 2]);
                                this.ctx.strokeRect(vx, vy, vwidth, vheight);
                                this.ctx.setLineDash([]);

                                // Draw corner handles
                                const handleSize = 8;
                                const half = handleSize / 2;
                                const corners = [
                                    { x: vx,             y: vy },               // top-left
                                    { x: vx + vwidth,    y: vy },               // top-right
                                    { x: vx,             y: vy + vheight },     // bottom-left
                                    { x: vx + vwidth,    y: vy + vheight }      // bottom-right
                                ];

                                this.ctx.fillStyle = 'rgb(0, 188, 212)';
                                for (const corner of corners) {
                                    this.ctx.fillRect(corner.x - half, corner.y - half, handleSize, handleSize);
                                }

                                // Mark shape as selected
                                shape.selected = true;
                            }
                            else {
                                this.ctx.strokeStyle = 'white';
                                shape.selected = false;
                            }
                        })
                    }
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
            shape = this.createRect(trueStartX, trueStartY, trueEndX, trueEndY)
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
                } else {
                    shapesToKeep.push(shape);
                }
            }

            
            if(erasedShapes.length > 0 ){
                console.log("log before delete socket message send")
                console.log(erasedShapes)
                const shapeIds = erasedShapes.map(s => s.id);
                console.log(shapeIds)

                this.socket.send(JSON.stringify({
                    type: "delete",
                    message: shapeIds,
                    roomId: this.roomId
                }))

                const action : Action = {
                    type: "delete",
                    shapes: erasedShapes,
                    timestamp: Date.now()
                }

                this.saveActionForUndo(this.undoStack, this.roomId, action);
                this.existingShapes = shapesToKeep;
            }

            this.clearCanvas()
        }
        else if (this.tool === 'SELECT'){
            if (this.activeTransform.type === 'move' && this.activeTransform.shapeId) {


                const shape= this.existingShapes.find(s => s.id === this.activeTransform.shapeId);
                const original = this.activeTransform.original;
                if(!shape || !original) return;

                let dx = 0, dy = 0;

                if (shape.type === 'RECT' && original.type==='RECT') {
                    dx = shape.rect.x - original.rect.x;
                    dy = shape.rect.y - original.rect.y;
                }
                else if (shape.type === 'CIRCLE' && original.type==='CIRCLE') {
                    dx = shape.circle.x - original.circle.x;
                    dy = shape.circle.y - original.circle.y;
                }else if (shape.type === 'LINE' && original.type==='LINE') {
                    dx = shape.line.x1 - original.line.x1;
                    dy = shape.line.y1 - original.line.y1;
                }else if (shape.type === 'PENCIL' && original.type==='PENCIL') {
                    dx = shape.pencil.points[0].x - original.pencil.points[0].x;
                    dy = shape.pencil.points[0].y - original.pencil.points[0].y;
                }

                if (dx === 0 && dy === 0) {
                    this.activeTransform = {
                        type: null,
                        shapeId: null,
                        startX: 0,
                        startY: 0,
                        original: null
                    }
                    return;
                }

                this.socket.send(JSON.stringify({
                    type: "move",
                    message: {shapeId: shape.id, dx: dx, dy: dy},
                    roomId: this.roomId
                }))
                this.saveActionForUndo(this.undoStack, this.roomId, {
                    type: "move",
                    dx: dx,
                    dy: dy,
                    shapes: [this.copyShape(shape)],
                    timestamp: Date.now()
                })
                shape.selected = true;
                this.activeTransform = {
                    type: null,
                    shapeId: null,
                    startX: 0,
                    startY: 0,
                    original: null
                }
                this.clearCanvas()
            }
            else {
                console.log(trueStartX, trueStartY, trueEndX, trueEndY)
                this.clearCanvas();
            }
        }
        else {
            this.canvas.style.cursor = 'grab';
        }

        if(!shape) return;

        const clientId = crypto.randomUUID();
        this.socket.send(JSON.stringify({
            type: "draw",
            message: {
                ...shape,
                clientId
            },
            roomId: this.roomId
        }));
        this.existingShapes.push({...shape, clientId})
        this.clearCanvas();
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

    keyDownHandler = (e : KeyboardEvent) =>{
        const isMac = navigator.platform.toUpperCase().includes("MAC");

        const ctrlKey = isMac? e.metaKey : e.ctrlKey;
        const shiftKey  = e.shiftKey;

        if(ctrlKey && e.key === 'z' && !shiftKey) {
            this.undo(this.roomId);
            console.log("Stacks")
            console.log(this.undoStack)
            console.log(this.redoStack)
            e.preventDefault();
        }

        if (ctrlKey && e.key === "Z" && shiftKey) {
            this.redo(this.roomId);
            console.log("Stacks")
            console.log(this.undoStack)
            console.log(this.redoStack)
            e.preventDefault();
        }
    }

    initMouseHandlers () {
        this.canvas.addEventListener('mousedown', this.mouseDownHandler);
        this.canvas.addEventListener('mousemove', this.mouseMoveHandler);
        this.canvas.addEventListener('mouseup', this.mouseUpHandler);
        this.canvas.addEventListener('wheel' , this.mouseWheelHandler);
    }

    initKeyboardHandlers () {
        window.addEventListener("keydown", this.keyDownHandler);
    }
}