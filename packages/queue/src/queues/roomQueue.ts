import {Queue} from 'bullmq'

export const roomQueue = new Queue('roomQueue', {
    connection: {
        url: "redis://localhost:6379"
    }
})