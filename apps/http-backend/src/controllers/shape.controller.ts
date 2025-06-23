import { Request, Response } from "express"
import prisma from '@repo/db/client'


export const getShapes = async (req : Request, res: Response) =>{

    try {
        if(!req.params.roomId){
            console.log("Invalid Room")
            return;
        }
        const roomId = parseInt(req.params.roomId);
        const shapes = await prisma.shape.findMany({
            where: {
                roomId : roomId as unknown as number
            },
            orderBy : {
                id : "desc"
            },
            take: 50
        })
        console.log(shapes)

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
