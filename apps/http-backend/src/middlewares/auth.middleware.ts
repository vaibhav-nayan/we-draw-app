import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req : Request, res : Response, next : NextFunction) => {
    console.log('Auth middleware');

    const authHeader = req.headers.authorization;
    if(authHeader === null || authHeader === undefined){
        return res.status(401).json({
            message: "Unauthorized! Could not get the Authorization Header!"
        })
    }

    const jwtToken = authHeader.split(" ")[1];

    jwt.verify(jwtToken!, process.env.JWT_SECRET!, (err, user) =>{
        if(err){
            return res.status(401).json({
                message: "Unauthorized! Incorrect Token!"
            })
        }
        req.user = user as AuthUser;
        res.status(200).json({
            message: "User Authorised!"
        })
    })

    next();
}