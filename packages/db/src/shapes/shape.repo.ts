import prisma from '../index.js';
import { Shape } from '../utils/types.js';

// GET SHAPES DB CALLS
export async function getAllShapes  (roomId : number) {
    return prisma.shape.findMany({
        where: {
            roomId: roomId
        },
        include: {
            rect: true, 
            circle: true,
            line: true,
            pencil: {
                include: {
                    points: true
                }
            },
            text: true
        }
    })
}

export const getShapeById = async (shapeId: number) =>{
    return prisma.shape.findUnique({
        where: {id: shapeId},
        include: {
            rect: true, 
            circle: true,
            line: true,
            pencil: {
                include: {
                    points: true
                }
            },
            text: true
        }
    })
}

export const getManyShapesByIds = async (shapeIds : number[]) =>{
    return prisma.shape.findMany({
        where: {
            id: {
                in: shapeIds
            }
        },
        include: {
            rect: true, 
            circle: true,
            line: true,
            pencil: {
                include: {
                    points: true
                }
            },
            text: true
        }
    })
}




// CREATE SHAPES DB CALLS
export const createNewShape = async (userId: string, roomId: string, shape: Shape) =>{
    return prisma.shape.create({
        data: {
            userId: userId,
            roomId: parseInt(roomId),
            type: shape.type,
            ...(shape.type === "RECT" && {
                rect: {
                    create: {
                    x: shape.rect.x,
                    y: shape.rect.y,
                    width: shape.rect.width,
                    height: shape.rect.height
                    }
                }
            }),
            ...(shape.type === "CIRCLE" && {
                circle: {
                    create: {
                    x: shape.circle.x,
                    y: shape.circle.y,
                    radius: shape.circle.radius
                    }
                }
            }),
            ...(shape.type === "LINE" && {
                line: {
                    create: {
                    x1: shape.line.x1,
                    y1: shape.line.y1,
                    x2: shape.line.x2,
                    y2: shape.line.y2
                    }
                }
            }),
            ...(shape.type === "PENCIL" && {
                pencil: {
                    create: {
                        points: {
                            createMany: {
                            data: (shape.pencil.points as {x:number, y:number}[]).map((point, idx) => ({
                                x: point.x,
                                y: point.y,
                                order: idx
                            }))
                            }
                        }
                    }
                }
            }),
            ...(shape.type === "TEXT" && {
                text: {
                    create: {
                        x: shape.text.x,
                        y: shape.text.y,
                        text: shape.text.text,
                        fontSize: shape.text.fontSize
                    }
                }
            })
        },
        include: {
            rect: true,
            circle: true,
            line: true,
            pencil: {
                include  :{
                    points : true
                }
            },
            text: true
        }
    })
}





// UPDATE POSITION DB CALLS
export const updatePositionRectangle = async (shapeId: number, dx: number, dy: number) =>{
    return prisma.shape.update({
        where: {id: shapeId},
        data : {
            rect: {
                update: {
                    x : {increment: dx},
                    y : {increment: dy}
                }
            }
        }
    })
}

export const updatePositionCircle = async (shapeId: number, dx: number, dy: number) =>{
    return prisma.shape.update({
        where: {id: shapeId},
        data : {
            circle: {
                update: {
                    x : {increment: dx},
                    y : {increment: dy}
                }
            }
        }
    })
}

export const updatePositionLine = async (shapeId: number, dx: number, dy: number) =>{
    return prisma.shape.update({
        where: {id: shapeId},
        data : {
            line: {
                update: {
                    x1 : {increment: dx},
                    y1 : {increment: dy},
                    x2 : {increment: dx},
                    y2 : {increment: dy}
                }
            }
        }
    })
}

export const updatePositionPencil = async (shapeId: number, dx: number, dy: number) =>{
    return prisma.shape.update({
        where: {id: shapeId},
        data : {
            pencil: {
                update: {
                    points: {
                        updateMany: {
                            where: {
                                pencilId: shapeId
                            },
                            data: {
                                x: {increment: dx},
                                y: {increment: dy}
                            }
                        }
                    }
                }
            }
        }
    })
}

export const updatePositionText = async (shapeId: number, dx: number, dy: number) =>{
    return prisma.shape.update({
        where: {id: shapeId},
        data : {
            text: {
                update: {
                    x : {increment: dx},
                    y : {increment: dy}
                }
            }
        }
    })
}




// UPDATE SHAPE BY SHAPE DB CALLS
export const updateRectByShape = async (shapeId: number, shape: Shape) =>{
    if(shape.type !== "RECT") return;
    return prisma.rect.update({
        where: {rectId: shapeId},
        data : {
            x : shape.rect.x,
            y : shape.rect.y,
            width : shape.rect.width,
            height : shape.rect.height
        }
    })
}

export const updateCircleByShape = async (shapeId: number, shape: Shape) =>{
    if(shape.type !== "CIRCLE") return;
    return prisma.circle.update({
        where: {circleId: shapeId},
        data : {
            x : shape.circle.x,
            y : shape.circle.y,
            radius : shape.circle.radius
        }
    })
}

export const updateLineByShape = async (shapeId: number, shape: Shape) =>{
    if(shape.type !== "LINE") return;
    return prisma.line.update({
        where: {lineId: shapeId},
        data : {
            x1 : shape.line.x1,
            y1 : shape.line.y1,
            x2 : shape.line.x2,
            y2 : shape.line.y2
        }
    })
}

export const updateTextByShape = async (shapeId: number, shape: Shape) =>{
    if(shape.type !== "TEXT") return;
    return prisma.text.update({
        where: {textId: shapeId},
        data : {
            x : shape.text.x,
            y : shape.text.y,
            text : shape.text.text,
            fontSize: shape.text.fontSize
        }
    })
}



// DELETE SHAPE DB CALLS
export const deleteManyShapes = async (shapeIds: number[]) =>[
    prisma.shape.deleteMany({
        where: {
            id: {
                in: shapeIds
            }
        }
    })
]