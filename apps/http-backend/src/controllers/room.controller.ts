import { createRoomSchema } from "@repo/common/types";
import { Request, Response } from "express"


export const createRoom = async (req : Request, res: Response) =>{

    const data = createRoomSchema.parse(req.body);
    if(!data) {
        res.json({
            message: "Incorrect Inputs"
        })
        return;
    }
    res.json({
        
    })
}
