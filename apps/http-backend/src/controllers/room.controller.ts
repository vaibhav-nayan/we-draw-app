import { createRoomSchema } from "@repo/common/types";
import { Request, Response } from "express"
import { createNewRoom, getAllRoomsPerUser, getRoomById , getRoomBySlug} from '@repo/db/rooms'
import { queueDeleteRoom } from "../jobs/roomJobs";


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
        // DB call to create room
        const room = await createNewRoom(parsedData.data.name, userId!);

        res.json({
            room
        })
    } catch (e) {
        res.status(411).json({
            message: "Room already exists with the same name!!"
        })
    }
}

export const deleteRoom = async (req : Request, res: Response) =>{

    const roomId = req.params.roomId;
    try {
        // DB call to delete room
        await queueDeleteRoom(parseInt(roomId!));

        res.json({
            message: "Room deleted successfully!!"
        })
    } catch (e) {
        res.status(411).json({
            message: "Room already exists with the same name!!"
        })
    }
}


export const getRooms = async (req : Request, res: Response) =>{

    // Extracting user id
    const userId = req.userId;
    try {
        // DB call to get all rooms for a user
        const rooms = await getAllRoomsPerUser(userId!);

        res.json({
            rooms
        })
    } catch (e) {
        res.status(411).json({
            message: "Could not get Rooms"
        })
    }
}

export const getRoom = async (req : Request, res: Response) =>{

    // Extracting Room ID
    const roomId = req.userId;
    try {
        // DB call to get room by Id
        const room = await getRoomById(parseInt(roomId!));

        // Sending response
        res.json({
            room
        })
    } catch (e) {
        // Sending error
        res.status(411).json({
            message: "Could not get Room"
        })
    }
}

export const getRoomId = async (req: Request, res: Response) =>{

    // Extracting Slug
    const slug = req.params.slug;

    // Checking if slug is empty
    if(!slug) {
        res.status(404).json({
            message: "Room with this name does not exist!!"
        })
        return;
    }

    // DB call to get room ID
    const room = await getRoomBySlug(slug);

    // Checking if room exists
    if(!room){
        res.status(404).json({
            message: "Room does not exist!!"
        })
        return;
    }
    res.json({
        roomId : room.id
    })
}