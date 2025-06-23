import { Router } from "express";
import { authRouter } from "./auth.routes";
import { roomRouter } from "./room.routes";
import { shapeRouter } from "./shape.routes";

const appRouter : Router = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/room', roomRouter)
appRouter.use('/shape', shapeRouter)

export default appRouter;