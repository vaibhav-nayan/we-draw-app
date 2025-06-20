import { Router } from "express";
import { authRouter } from "./auth.routes";
import { roomRouter } from "./room.routes";
import { chatRouter } from "./chat.routes";

const appRouter : Router = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/room', roomRouter)
appRouter.use('/chats', chatRouter)

export default appRouter;