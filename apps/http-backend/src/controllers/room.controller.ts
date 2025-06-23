import { createRoomSchema } from "@repo/common/types";
import { Request, Response } from "express"
import prisma from '@repo/db/client'


export const createRoom = async (req : Request, res: Response) =>{

    const parsedData = createRoomSchema.safeParse(req.body);
    console.log(parsedData);
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
                adminId : userId!
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


export const getRooms = async (req : Request, res: Response) =>{

    const userId = req.userId;
    try {
        const rooms = await prisma.room.findMany({
            where: {
                adminId : userId
            }
        })

        res.json({
            rooms
        })
    } catch (e) {
        res.status(411).json({
            message: "Could not get Rooms"
        })
    }
}

export const getRoomId = async (req: Request, res: Response) =>{

    const slug = req.params.slug;
    const roomId = await prisma.room.findUnique({
        where: {
            slug : slug
        }
    })
    if(!roomId){
        res.status(404).json({
            message: "Room does not exist!!"
        })
        return;
    }
    res.json({
        roomId : roomId.id
    })
}