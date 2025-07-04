import { Request, Response } from "express"
import prisma from '@repo/db/client'


export const getShapes = async (req : Request, res: Response) =>{

    try {
        if(!req.params.roomId){
            console.log("Invalid Room")
            return;
        }
        const roomId = parseInt(req.params.roomId);
        const rawShapes = await prisma.shape.findMany({
            where: {
                roomId : roomId as unknown as number
            },
            include: {
                rect: true,
                circle: true,
                line: true,
                pencil: {
                    include : {points : true}
                },
                text: true
            }
        })
        // console.log(shapes)
        const shapes = rawShapes.map(shape => {
        if (shape.type === "RECT" && shape.rect) {
            return {
            id: shape.id,
            type: "RECT",
            rect: {
                x: shape.rect.x,
                y: shape.rect.y,
                width: shape.rect.width,
                height: shape.rect.height
            }
            };
        } else if (shape.type === "CIRCLE" && shape.circle) {
            return {
            id: shape.id,
            type: "CIRCLE",
            circle: {
                x: shape.circle.x,
                y: shape.circle.y,
                radius: shape.circle.radius
            }
            };
        } else if (shape.type === "LINE" && shape.line) {
            return {
            id: shape.id,
            type: "LINE",
            line: {
                x1: shape.line.x1,
                y1: shape.line.y1,
                x2: shape.line.x2,
                y2: shape.line.y2
            }
            };
        }
        else if (shape.type === "PENCIL" && shape.pencil) {
            return {
                id: shape.id,
                type : "PENCIL",
                pencil : {
                    points : shape.pencil.points
                }
            }
        }
        else if(shape.type === "TEXT" && shape.text) {
            return {
                id: shape.id,
                type : "TEXT",
                text: {
                    x: shape.text.x,
                    y: shape.text.y,
                    text: shape.text.text
                }
            }
        }
        return null; // in case of invalid shape
        }).filter(Boolean); // remove nulls

        res.json({
            shapes
        })
    }
    catch (e) {
        res.status(500).json({
            message: "Could not get shapes"
        })
    }
}
