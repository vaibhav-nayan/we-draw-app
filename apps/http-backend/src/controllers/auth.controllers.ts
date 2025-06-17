import { Request, Response } from "express"


export const signup = async (req : Request, res: Response) =>{
    res.send('This is signup endpoint')
}

export const signin = async (req : Request, res: Response) =>{
    res.send('This is signin endpoint')
}