import { createRoomSchema } from "@repo/common/types";
import { Request, Response } from "express"
import prisma from '@repo/db/client'


export const getChats = async (req : Request, res: Response) =>{

    try {
        const roomId = req.params.roomId;
        const messages = await prisma.chat.findMany({
            where: {
                roomId : roomId
            },
            orderBy : {
                id : "desc"
            },
            take: 50
        })

        res.json({
            messages
        })
    }
    catch (e) {
        res.status(500).json({
            message: "Could not get messages"
        })
    }
}
