import {z} from 'zod';

export const CreateUserSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6)
})

export const SigninSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6)
})

export const createRoomSchema = z.object({
    name: z.string().min(3).max(20)
})