import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"

export const authMiddleware = (req : Request, res : Response, next : NextFunction) : void => {

    const authHeader = req.headers.authorization ?? " ";
    if(authHeader === null || authHeader === undefined){
        res.status(401).json({
            message: "Unauthorized! Could not get the Authorization Header!"
        })
    }

    const jwtToken = authHeader.split(" ")[1] ?? "";

    const decoded : JwtPayload = jwt.verify(jwtToken, JWT_SECRET) as JwtPayload;

    if(decoded){
        req.userId = decoded.userId;
        next();
    }else{
        res.status(401).json({
            message: "Unauthorized!"
        })
    }
}