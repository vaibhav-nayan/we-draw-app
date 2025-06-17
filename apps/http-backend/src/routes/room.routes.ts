import { Router } from "express"
import { createRoom } from "../controllers/room.controller";
import { authMiddleware } from "../middlewares/auth.middleware";


const roomRouter : Router = Router();

roomRouter.post('/create-room', authMiddleware, createRoom)

export {roomRouter};