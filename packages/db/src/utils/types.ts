export type Shape = {
    id: number
    type: "RECT"
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    selected? : boolean
} | {
    id: number
    type: "CIRCLE"
    circle: {
        x: number;
        y: number;
        radius: number;
    }
    selected? : boolean
} | {
    id: number
    type: "LINE"
    line: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }
    selected? : boolean
} | {
    id: number
    type: "PENCIL",
    pencil : {
        points: {
            x: number;
            y: number;
            order: number;
        }[]
    }
    selected? : boolean
} | {
    id: number
    type: "TEXT"
    text: {
        x: number;
        y: number;
        text: string;
        fontSize: number
    }
    clientId? : string
    selected? : boolean
}

export type Action = {
    type : "draw" | "delete"| "move" | "resize",
    dx? : number,
    dy? : number,
    shapes: Shape[],
    userId? : string,
    timestamp : number       
}