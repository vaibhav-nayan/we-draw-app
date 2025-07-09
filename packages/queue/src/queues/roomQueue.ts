import {Queue} from 'bullmq'
import dotenv from "dotenv";
dotenv.config();

export const roomQueue = new Queue('roomQueue', {
    connection: {
        url: process.env.REDIS_URL
    }
})