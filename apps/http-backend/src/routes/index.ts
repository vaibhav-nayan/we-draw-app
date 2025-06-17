import { Router } from "express";
import { authRouter } from "./auth.routes";
import { roomRouter } from "./room.routes";

const appRouter : Router = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/room', roomRouter)

export default appRouter;