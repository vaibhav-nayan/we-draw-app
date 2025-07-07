import { getExistingShapes } from "./http-calls";
import { ToolType } from "@/components/Canvas";

const selectSVGUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3VzZS1wb2ludGVyMi1pY29uIGx1Y2lkZS1tb3VzZS1wb2ludGVyLTIiPjxwYXRoIGQ9Ik00LjAzNyA0LjY4OGEuNDk1LjQ5NSAwIDAgMSAuNjUxLS42NTFsMTYgNi41YS41LjUgMCAwIDEtLjA2My45NDdsLTYuMTI0IDEuNThhMiAyIDAgMCAwLTEuNDM4IDEuNDM1bC0xLjU3OSA2LjEyNmEuNS41IDAgMCAxLS45NDcuMDYzeiIvPjwvc3ZnPg=="
const pencilSVGUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wZW5jaWwtaWNvbiBsdWNpZGUtcGVuY2lsIj48cGF0aCBkPSJNMjEuMTc0IDYuODEyYTEgMSAwIDAgMC0zLjk4Ni0zLjk4N0wzLjg0MiAxNi4xNzRhMiAyIDAgMCAwLS41LjgzbC0xLjMyMSA0LjM1MmEuNS41IDAgMCAwIC42MjMuNjIybDQuMzUzLTEuMzJhMiAyIDAgMCAwIC44My0uNDk3eiIvPjxwYXRoIGQ9Im0xNSA1IDQgNCIvPjwvc3ZnPg=="
const eraserSVGUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtaWNvbiBsdWNpZGUtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg=="


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
    toBeErased? : boolean
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
    toBeErased? : boolean
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
    toBeErased? : boolean
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
    toBeErased? : boolean
} | {
    id?: number
    type: "TEXT"
    text: {
        x: number;
        y: number;
        text: string;
        fontSize: number
    }
    clientId? : string
    selected? : boolean
    toBeErased? : boolean
}

export type Action = {
    type : "draw" | "delete" | "move" | "resize",
    dx? : number,
    dy? : number,
    shapes: Shape[],
    userId? : string,
    timestamp : number       
}

type ActiveTransform = {
    type : "move" | "resize" | null,
    shapeId : number | null,
    handle?: number,
    startX : number,
    startY : number,
    original: Shape | null
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
    private activeTransform: ActiveTransform = {
        type : null,
        shapeId : null,
        startX : 0,
        startY : 0,
        original: null
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
        } else if(shape.type === "TEXT" && shape.text) {
            shape.text.x += dx;
            shape.text.y += dy;
        }

        this.clearCanvas(); 
    }

    private applyResizeLocally(shapeId: number, shape: Shape){
        const shapeIndex = this.existingShapes.findIndex(s => s.id === shapeId);
        if (shapeIndex !== -1) {
            this.existingShapes[shapeIndex] = shape;
        }
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
        // console.log("undo Logs")
        // console.log(stack)
        if(!stack || stack.length === 0) return;

        const action = stack.pop();
        // console.log(action)
        if(!action) return;

        // PUSHING INTO REDO STACK
        if(!this.redoStack[roomId]){
            this.redoStack[roomId] = [];
        }
        if(action.type === 'move'){
            this.redoStack[roomId] = this.redoStack[roomId] || [];
            this.redoStack[roomId].push({
                type: "move",
                shapes: action.shapes,
                dx: -action.dx!,
                dy: -action.dy!,
                timestamp: Date.now()
            })
        }
        else if(action.type === 'resize'){
            this.redoStack[roomId] = this.redoStack[roomId] || [];
            this.redoStack[roomId].push({
                type: "resize",
                shapes: [action.shapes[1], action.shapes[0]],
                timestamp: Date.now()
            })
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
            // console.log("move block reached")
            const shapeId = action.shapes[0].id;
            const dx = action.dx;
            const dy = action.dy;
            // console.log(shapeId, dx, dy)
            if(!shapeId || !dx || !dy) return;
            this.applyMoveLocally(shapeId , -dx, -dy)
        } else if(action.type === 'resize'){
            const shapeId = action.shapes[0].id;
            const newShape = action.shapes[0];
            const original = action.shapes[1];
            if(!shapeId || !newShape || !original) return;
            this.applyResizeLocally(shapeId, original)
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
                dx: -action.dx!,
                dy: -action.dy!,
                timestamp: Date.now()
            })
        }
        else if(action.type === 'resize'){
            this.undoStack[roomId] = this.undoStack[roomId] || [];
            this.undoStack[roomId].push({
                type: "resize",
                shapes: [action.shapes[1], action.shapes[0]],
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
        else if (action.type === 'move'){

            const shapeId = action.shapes[0].id;
            const dx = action.dx;
            const dy = action.dy;
            if(!shapeId || !dx || !dy) return;
            this.applyMoveLocally(shapeId , -dx, -dy)
        }
        else if(action.type === 'resize'){
            const shapeId = action.shapes[0].id;
            const newShape = action.shapes[0];
            const original = action.shapes[1];
            if(!shapeId || !newShape) return;
            this.applyResizeLocally(shapeId, original)
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

    private getHoveredHandleOrShape(x: number, y: number): { type: 'handle' | 'shape' | 'none', handle?: number, cursor?: string, shape: Shape | null } {

        const handleSize = 8;
        const half = handleSize / this.scale; // important: adjust for zoom

        for (const shape of this.existingShapes) {
            if (!shape.selected) continue;
            if(shape.type === 'LINE'){
                const { rx1, ry1, rx2, ry2 } = this.getBoundingBoxFromLine(shape);
                if (
                    x >= rx1 - half && x <= rx1 + half &&
                    y >= ry1 - half && y <= ry1 + half
                )
                {
                    return { type: 'handle', cursor: 'pointer' , handle: 0, shape: shape };
                }
                if (
                    x >= rx2 - half && x <= rx2 + half &&
                    y >= ry2 - half && y <= ry2 + half
                )
                {
                    return { type: 'handle', cursor: 'pointer' , handle: 1, shape: shape};
                }
                if (
                    this.isPointNearLine(x, y, rx1, ry1, rx2, ry2, half)
                )
                {
                    return { type: 'shape' , shape: shape };
                }
            }
            const { rx, ry, rw, rh } = this.getBoundingBoxFromShape(shape);

            const corners = [
                { x: rx,         y: ry,         cursor: 'nwse-resize' , handle: 0}, // top-left
                { x: rx + rw,    y: ry,         cursor: 'nesw-resize' , handle: 1}, // top-right
                { x: rx,         y: ry + rh,    cursor: 'nesw-resize' , handle: 2}, // bottom-left
                { x: rx + rw,    y: ry + rh,    cursor: 'nwse-resize' , handle: 3}  // bottom-right
            ];

            for (const corner of corners) {
                if (
                    x >= corner.x - half && x <= corner.x + half &&
                    y >= corner.y - half && y <= corner.y + half
                )
                {
                    return { type: 'handle', cursor: corner.cursor , handle: corner.handle , shape: shape};
                }
            }

            if (
                x > rx && x < rx + rw &&
                y > ry && y < ry + rh
            )
            {
                return { type: 'shape', shape: shape };
            }
        }

        return { type: 'none' , shape: null };
    }

    private getBoundingBoxFromLine(shape : Shape) : { rx1: number, ry1: number, rx2: number, ry2: number } {
        if(shape.type === 'LINE' && shape.line) {
            return {
                rx1: this.toVirtualX(shape.line.x1),
                ry1: this.toVirtualX(shape.line.y1),
                rx2: this.toVirtualX(shape.line.x2),
                ry2: this.toVirtualX(shape.line.y2),
            };
        }
        return { rx1: 0, ry1: 0, rx2: 0, ry2: 0 };
    }
    private getBoundingBoxFromShape(shape: Shape): { rx: number, ry: number, rw: number, rh: number } {
        if (shape.type === 'RECT' && shape.rect) {
            return {
                rx: this.toVirtualX(shape.rect.x),
                ry: this.toVirtualY(shape.rect.y),
                rw: shape.rect.width * this.scale,
                rh: shape.rect.height * this.scale
            };
        }
        if (shape.type === 'CIRCLE' && shape.circle) {
            const { x, y, radius } = shape.circle;
            return {
                rx: this.toVirtualX(x - radius),
                ry: this.toVirtualY(y - radius),
                rw: radius * 2 * this.scale,
                rh: radius * 2 * this.scale
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
                rx: this.toVirtualX(minX),
                ry: this.toVirtualY(minY),
                rw: maxX - minX * this.scale,
                rh: maxY - minY * this.scale
            };
        }
        if (shape.type === 'TEXT' && shape.text) {
            const { x, y } = shape.text;
            const  width  = (this.ctx.measureText(shape.text.text).width) / this.scale;
            const height = (this.ctx.measureText(shape.text.text).actualBoundingBoxAscent + this.ctx.measureText(shape.text.text).actualBoundingBoxDescent) / this.scale;
            return {
                rx: this.toVirtualX(x),
                ry: this.toVirtualY(y),
                rw: width * this.scale,
                rh: height * this.scale
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
                    // console.log("shape found")
                    // console.log(shape)
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
            else if(shape.type === 'TEXT'){
                const {x: tx, y:ty} = shape.text;
                const width = this.ctx.measureText(shape.text.text).width / this.scale;
                const height = (this.ctx.measureText(shape.text.text).actualBoundingBoxAscent + this.ctx.measureText(shape.text.text).actualBoundingBoxDescent) / this.scale;
                if(x >= tx && x<= tx+width && y>=ty && y<=ty+height) {
                    return shape;
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
            this.canvas.style.cursor = `url(${eraserSVGUrl}) 8 8, auto`;
        }
        else if(tool === 'PENCIL') this.canvas.style.cursor = `url(${pencilSVGUrl}) 0 16, auto`;
        else if(tool === 'SELECT') this.canvas.style.cursor = `url(${selectSVGUrl}) 0 0, auto`;
        else if(tool === "TEXT") this.canvas.style.cursor = 'text';
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
                else if(action.type === 'move'){
                    const shapeId = action.shapes[0]?.id;
                    const dx = action.dx;
                    const dy = action.dy;

                    if (!shapeId || !dx || !dy) return;

                    this.applyMoveLocally(shapeId, -dx, -dy);
                }
                else if(action.type === 'resize'){
                    const shapeId = action.shapes[0]?.id;
                    const newShape = action.shapes[0];
                    const original = action.shapes[1];

                    if (!shapeId || !newShape || !original) return;

                    this.applyResizeLocally(shapeId, newShape);
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
                else if(shape.type === 'TEXT') {
                    shape.text.x += dx;
                    shape.text.y += dy;
                }
                this.clearCanvas();
            }
            else if(message.type === 'confirm-resize') {
                const {shapeId, shape} = message.message;
                const originalShape = this.existingShapes.find(s => s.id === shapeId);

                if(!originalShape) return;

                if (originalShape.type === 'RECT') {
                    originalShape.rect = shape.rect;
                }
                else if (originalShape.type === 'CIRCLE') {
                    originalShape.circle = shape.circle;
                }
                else if (originalShape.type === 'LINE') {
                    originalShape.line = shape.line;
                }
                else if(originalShape.type === 'PENCIL') {
                    originalShape.pencil = shape.pencil;
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
            if(shape.toBeErased){
                this.ctx.strokeStyle = 'gray';
            }
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
                    const { x1, y1, x2, y2 } = shape.line;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.toVirtualX(x1), this.toVirtualY(y1));
                    this.ctx.lineTo(this.toVirtualX(x2), this.toVirtualY(y2));
                    this.ctx.stroke();

                    this.ctx.beginPath();
                    this.ctx.arc(this.toVirtualX(x1), this.toVirtualY(y1), 5, 0, 2 * Math.PI);
                    this.ctx.stroke();
                    this.ctx.beginPath();
                    this.ctx.arc(this.toVirtualX(x2), this.toVirtualY(y2), 5, 0, 2 * Math.PI);
                    this.ctx.stroke();
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
            else if(shape.type === 'TEXT') {
                this.ctx.fillStyle = "white";
                this.ctx.textBaseline = "top";
                this.ctx.font = `${shape.text.fontSize*this.scale}px Arial`;
                const { x, y, text } = shape.text;
                this.ctx.fillText(text, this.toVirtualX(x), this.toVirtualY(y));

                if(shape.selected){
                    const { x, y, text } = shape.text;
                    const vx = this.toVirtualX(x);
                    const vy = this.toVirtualY(y);
                    const textMetrics = this.ctx.measureText(text);
                    const vw = textMetrics.width;
                    const vh = (shape.text.fontSize)*this.scale;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.strokeStyle = 'rgb(0, 188, 212)';
                    this.ctx.strokeRect(vx, vy, vw, vh);

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
        const hovered = this.getHoveredHandleOrShape(e.clientX, e.clientY);
        if (hovered.shape && hovered.shape.selected) {
            if(hovered.type === 'shape'){
                this.activeTransform = {
                    type : "move",
                    shapeId: hovered.shape.id!, 
                    startX : realX,
                    startY : realY,
                    original: this.copyShape(hovered.shape! as Shape)
                }
            }
            else if(hovered.type === 'handle'){
                this.activeTransform = {
                    type : "resize",
                    shapeId: (hovered.shape! as Shape).id!,
                    handle: hovered.handle, 
                    startX : realX,
                    startY : realY,
                    original: this.copyShape(hovered.shape!)
                }
            }
        }
        if(e.button === 1){
            this.canvas.style.cursor = 'grabbing';
            this.middleMouseDown = true;
            e.preventDefault()
        }
        if(this.tool === 'SELECT'){
            const hovered = this.getHoveredHandleOrShape(e.clientX, e.clientY);
            this.existingShapes.forEach(s => {
                if(s != hovered.shape) s.selected = false
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
        else if(this.tool === 'TEXT'){
            this.canvas.style.cursor = 'default';
            console.log("reached")
            setTimeout(() => {
                const input = document.createElement('input');
                input.type = 'text';
                input.style.position = 'absolute';
                input.style.left = `${e.clientX-2}px`;
                input.style.top = `${e.clientY-4}px`;
                input.style.zIndex = '1000';
                input.style.font = '14px Arial';
                input.style.color = 'white';
                input.style.outline = 'none';
                input.style.background = 'transparent';
                input.style.width = '2ch';
                input.style.minWidth='2ch';
                input.style.padding = '2px';

                document.body.appendChild(input);
                input.focus();

                input.addEventListener('mousedown', (e) => e.stopPropagation());
                input.onkeydown = (e) =>{
                    if(e.key === 'Escape'){
                        input.blur();
                    }
                }
                input.addEventListener('input', () =>{
                    input.style.width = `${input.value.length+1}ch`;
                })
                input.addEventListener('blur', () => {
                    const textValue = input.value;
                    if (textValue.trim() !== '') {
                        const shape: Shape = {
                            type: 'TEXT',
                            text: {
                                x: this.toRealX(e.clientX),
                                y: this.toRealY(e.clientY),
                                text: textValue,
                                fontSize: 14
                            }
                        };

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
                    input.remove();
                });
            }, 10);
        }
    }

    mouseMoveHandler = (e : MouseEvent) => {
        this.cursorX = e.pageX;
        this.cursorY = e.pageY;

        if(this.tool === 'SELECT'){
            if(this.middleMouseDown){
                this.offsetX += ((this.cursorX - this.prevCursorX) / this.scale);
                this.offsetY += ((this.cursorY - this.prevCursorY) / this.scale);
                this.clearCanvas();
                this.prevCursorX = e.pageX;
                this.prevCursorY = e.pageY;
            }
            else {
                const hovered = this.getHoveredHandleOrShape(e.clientX, e.clientY);
                if (hovered.type === 'handle') {
                    this.canvas.style.cursor = hovered.cursor!;
                } else if (hovered.type === 'shape') {
                    this.canvas.style.cursor = 'move';
                }
                else {
                    this.canvas.style.cursor = `url(${selectSVGUrl}) 0 0, auto`;
                }
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
                const currrentShape = this.getShapeAt(realX, realY);

                if(currrentShape) {
                    currrentShape.toBeErased = true;
                }
                this.eraserPoints.push({x: realX, y: realY});

                this.clearCanvas();

                this.ctx.save();
                this.ctx.setLineDash([5, 5]);
                this.ctx.lineWidth = 1;
                this.ctx.strokeStyle = 'gray';
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
                        else if(shape.type === 'TEXT' && original.type === 'TEXT') {
                            shape.text.x = original.text.x + dx;
                            shape.text.y = original.text.y + dy;
                        }

                        this.clearCanvas();
                    }
                    else if(this.activeTransform.type === "resize") {
                        
                        const realX = this.toRealX(e.clientX);
                        const realY = this.toRealY(e.clientY);
                        const dx = realX - this.activeTransform.startX;
                        const dy = realY - this.activeTransform.startY;

                        const shape = this.existingShapes.find(s => s.id === this.activeTransform.shapeId);
                        if (!shape) return;

                        const original : Shape = this.activeTransform.original as Shape;

                        if (shape.type === 'RECT' && original.type === 'RECT') {
                            if(this.activeTransform.handle === 0){
                                shape.rect.x = original.rect.x + dx;
                                shape.rect.y = original.rect.y + dy;
                                shape.rect.width = original.rect.width - dx;
                                shape.rect.height = original.rect.height - dy;
                            }
                            else if(this.activeTransform.handle === 1){
                                shape.rect.y = original.rect.y + dy;
                                shape.rect.width = original.rect.width + dx;
                                shape.rect.height = original.rect.height - dy;
                            }
                            else if(this.activeTransform.handle === 2){
                                shape.rect.x = original.rect.x + dx;
                                shape.rect.width = original.rect.width - dx;
                                shape.rect.height = original.rect.height + dy;
                            }
                            else if(this.activeTransform.handle === 3){
                                shape.rect.width = original.rect.width + dx;
                                shape.rect.height = original.rect.height + dy;
                            }
                        } 
                        else if (shape.type === 'CIRCLE' && original.type === 'CIRCLE') {
                            shape.circle.radius = original.circle.radius + Math.sqrt(dx * dx + dy * dy);
                        }
                        else if(shape.type === "LINE" && original.type === 'LINE') {
                            if(this.activeTransform.handle === 0) {
                                shape.line.x1 = original.line.x1 + dx;
                                shape.line.y1 = original.line.y1 + dy;
                            }
                            else if(this.activeTransform.handle === 1) {
                                shape.line.x2 = original.line.x2 + dx;
                                shape.line.y2 = original.line.y2 + dy;
                            }
                        }
                        else if(shape.type === 'PENCIL' && original.type === 'PENCIL') {

                            alert("PENCIL RESIZE NOT SUPPORTED");
                            return;

                            /*
                            const bbox = this.getBoundingBoxFromShape(original);

                            let originX: number;
                            let originY: number;
                            let newWidth: number;
                            let newHeight: number;

                            switch (this.activeTransform.handle) {
                                case 0:
                                    originX = bbox.rx + bbox.rw;
                                    originY = bbox.ry + bbox.rh;
                                    newWidth = bbox.rw - dx;
                                    newHeight = bbox.rh - dy;
                                    break;
                                case 1:
                                    originX = bbox.rx;
                                    originY = bbox.ry + bbox.rh;
                                    newWidth = bbox.rw + dx;
                                    newHeight = bbox.rh - dy;
                                    break;
                                case 2:
                                    originX = bbox.rx;
                                    originY = bbox.ry;
                                    newWidth = bbox.rw + dx;
                                    newHeight = bbox.rh + dy;
                                    break;
                                case 3:
                                    originX = bbox.rx + bbox.rw;
                                    originY = bbox.ry;
                                    newWidth = bbox.rw - dx;
                                    newHeight = bbox.rh + dy;
                                    break;
                                default:
                                    originX = bbox.rx;
                                    originY = bbox.ry;
                                    newWidth = bbox.rw;
                                    newHeight = bbox.rh;
                                    break;
                            }

                            const scaleX = newWidth / Math.max(bbox.rw, 1);
                            const scaleY = newHeight / Math.max(bbox.rh, 1);

                            const resizedPoints = original.pencil.points.map(point => ({
                                x: originX + (point.x - originX) * scaleX,
                                y: originY + (point.y - originY) * scaleY,
                                order: point.order
                            }))
                            
                            shape.pencil.points = resizedPoints;
                            */
                        }
                        else if(shape.type === 'TEXT' && original.type === 'TEXT') {
                            const oldText = original.text;
                            const width = this.ctx.measureText(oldText.text).width;
                            const height = this.ctx.measureText(oldText.text).actualBoundingBoxAscent + this.ctx.measureText(oldText.text).actualBoundingBoxDescent;

                            const newHeight = height + Math.abs(dy);
                            const newWidth = width + Math.abs(dx);
                            const scaleY = newHeight / height;
                            const scaleX = newWidth / width;

                            const newFontSize = oldText.fontSize * Math.max(scaleX, scaleY);

                            shape.text.fontSize = newFontSize;
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
                            else if(shape.type === 'TEXT'){
                                if(shape.text === undefined) return;
                                shapeStartX = shape.text.x;
                                shapeStartY = shape.text.y;
                                const text = shape.text.text;
                                const width = this.ctx.measureText(text).width / this.scale;
                                const height = (this.ctx.measureText(text).actualBoundingBoxAscent + this.ctx.measureText(text).actualBoundingBoxDescent) / this.scale;
                                shapeEndX = shape.text.x + width;
                                shapeEndY = shape.text.y + height;
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
                                shape.selected = true;
                            }
                            else {
                                this.ctx.strokeStyle = 'white';
                                shape.selected = false;
                            }
                        })
                    }
                }
                else if(this.tool === 'TEXT') {
                    return;
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
                shape.toBeErased = false;
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
                    else if(shape.type === 'TEXT'){
                        const {x, y, text} = shape.text;
                        this.ctx.font = '14px Arial'; 
                        const textMetrics = this.ctx.measureText(text);
                        const width = textMetrics.width;
                        const height = 14;
                        if(ex >= x - eraserRadius && ex <= x + width + eraserRadius &&
                            ey >= y - eraserRadius && ey <= y + height + eraserRadius
                        ) {
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
                }else if(shape.type === 'TEXT' && original.type === 'TEXT') {
                    dx = shape.text.x - original.text.x;
                    dy = shape.text.y - original.text.y;
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

                // console.log("Sending to server")
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
            else if(this.activeTransform.type === 'resize' && this.activeTransform.shapeId) {

                const finalShape = this.existingShapes.find(s => s.id === this.activeTransform.shapeId);
                const original = this.activeTransform.original;
                if(!finalShape || !original) return;
                if(finalShape){
                    this.socket.send(JSON.stringify({
                        type: "resize",
                        message: {
                            shapeId: finalShape.id,
                            shape : finalShape,
                            original: original
                        },
                        roomId: this.roomId
                    }))
                    this.saveActionForUndo(this.undoStack, this.roomId, {
                        type: "resize",
                        shapes: [this.copyShape(finalShape), this.copyShape(original)],
                        timestamp: Date.now()
                    })
                    this.activeTransform = {
                        type: null,
                        shapeId: null,
                        startX: 0,
                        startY: 0,
                        original: null
                    }
                }

                
            }
            else {
                console.log(trueStartX, trueStartY, trueEndX, trueEndY)
                this.clearCanvas();
            }
        }
        else if (this.tool === 'TEXT') {
            return;
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
            // console.log("Stacks")
            // console.log(this.undoStack)
            // console.log(this.redoStack)
            e.preventDefault();
        }

        if (ctrlKey && e.key === "Z" && shiftKey) {
            this.redo(this.roomId);
            // console.log("Stacks")
            // console.log(this.undoStack)
            // console.log(this.redoStack)
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