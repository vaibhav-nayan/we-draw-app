import { createRoomSchema } from "@repo/common/types";
import { Request, Response } from "express"
import prisma from '@repo/db/client'


export const createRoom = async (req : Request, res: Response) =>{

    const parsedData = createRoomSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message: "Incorrect Inputs"
        })
        return;
    }
    const userId = req.userId;

    try {
        const room = await prisma.room.create({
            data: {
                slug : parsedData.data.name,
                adminId : userId
            }
        })

        res.json({
            roomId : room.id
        })
    } catch (e) {
        res.status(411).json({
            message: "Room already exists with the same name!!"
        })
    }
}
