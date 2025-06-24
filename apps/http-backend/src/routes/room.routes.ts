import { Router } from "express"
import { createRoom, deleteRoom, getRoom, getRoomId, getRooms } from "../controllers/room.controller";
import { authMiddleware } from "../middlewares/auth.middleware";


const roomRouter : Router = Router();

roomRouter.post('/create-room', authMiddleware, createRoom)
roomRouter.get('/get-rooms', authMiddleware, getRooms)
roomRouter.get('/get-room/:roomId', authMiddleware, getRoom)
roomRouter.delete('/delete-room/:roomId', authMiddleware, deleteRoom)
roomRouter.get('/:slug', authMiddleware, getRoomId)

export {roomRouter};