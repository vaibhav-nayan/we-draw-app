import {Queue} from 'bullmq'
import dotenv from "dotenv";
dotenv.config();

export const shapeQueue = new Queue('shapeQueue', {
    connection: {
        url: process.env.REDIS_URL
    }
})