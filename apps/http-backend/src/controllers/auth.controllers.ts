import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import {CreateUserSchema, SigninSchema} from "@repo/common/types"

export const signup = async (req : Request, res: Response) =>{

    const data = CreateUserSchema.parse(req.body);
    if(!data) {
        res.json({
            message: "Incorrect Inputs"
        })
        return;
    }
    res.send('This is signup endpoint')
}

export const signin = async (req : Request, res: Response) =>{
    
    const data = SigninSchema.parse(req.body);
    if(!data) {
        res.json({
            message: "Incorrect Inputs"
        })
        return;
    }
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    const jwtToken = "Bearer " + token

    res.json({jwtToken})
}