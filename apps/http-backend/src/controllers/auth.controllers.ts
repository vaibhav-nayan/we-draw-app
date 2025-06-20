import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import {CreateUserSchema, SigninSchema} from "@repo/common/types"
import prisma from "@repo/db/client"
import bcrypt from 'bcrypt'

export const signup = async (req : Request, res: Response) =>{

    const parsedData = CreateUserSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message: "Incorrect Inputs"
        })
        return;
    }
    try {
        const userPassword = parsedData.data.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(userPassword, salt);

        const user = await prisma.user.create({
            data: {
                email : parsedData.data.email,
                password : hashedPassword,
                name : parsedData.data.name,
                avatar : parsedData.data?.avatar
            }
        })
        req.userId = user.id;
    }
    catch (error) {
        res.status(409).json({message: "User already exists"});
    }
}

export const signin = async (req : Request, res: Response) =>{
    
    const parsedData = SigninSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message: "Incorrect Inputs"
        })
        return;
    }

    const user = await prisma.user.findFirst({
        where: {
            email : parsedData.data.email,
        }
    })

    if(!user) {
        res.status(411).json({
            message: "User does not Exist with the email!!"
        })
        return;
    }

    const hashedPassword = user.password;
    const userPassword = parsedData.data.password;
    const result = bcrypt.compare(userPassword, hashedPassword);
    if(!result) {
        res.status(411).json({
            message: "User Not Authorized! Password is incorrect!"
        })
    }

    const token = jwt.sign({
        userId : user.id
    }, JWT_SECRET);

    const jwtToken = "Bearer " + token

    res.json({jwtToken})
}