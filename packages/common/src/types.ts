import {z} from 'zod';

export const CreateUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3).max(20),
    avatar: z.string().optional()
})

export const SigninSchema = z.object({
    email: z.string().min(3).max(20),
    password: z.string().min(6)
})

export const createRoomSchema = z.object({
    name: z.string().min(3).max(20)
})