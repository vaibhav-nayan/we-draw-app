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
                line: true
            }
        })
        // console.log(shapes)
        const shapes = rawShapes.map(shape => {
        if (shape.type === "RECT" && shape.rect) {
            return {
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
            type: "CIRCLE",
            circle: {
                x: shape.circle.x,
                y: shape.circle.y,
                radius: shape.circle.radius
            }
            };
        } else if (shape.type === "LINE" && shape.line) {
            return {
            type: "LINE",
            line: {
                x1: shape.line.x1,
                y1: shape.line.y1,
                x2: shape.line.x2,
                y2: shape.line.y2
            }
            };
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
