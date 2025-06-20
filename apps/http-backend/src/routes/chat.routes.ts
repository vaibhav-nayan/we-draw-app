import { Router } from "express"
import { createRoom } from "../controllers/room.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getChats } from "../controllers/chat.controller";


const chatRouter : Router = Router();

chatRouter.post('/create-room', authMiddleware, getChats)

export {chatRouter};