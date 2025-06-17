import { Router } from "express"
import { signup, signin } from "../controllers/auth.controllers"

const authRouter : Router = Router();

authRouter.post('/signup', signup)

authRouter.post('/signin', signin)

export {authRouter};