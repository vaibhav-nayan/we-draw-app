import { Router } from "express"
import { createRoom } from "../controllers/room.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getShapes } from "../controllers/shape.controller";


const shapeRouter : Router = Router();

shapeRouter.get('/:roomId', authMiddleware, getShapes)

export {shapeRouter};