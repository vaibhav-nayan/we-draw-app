import {Queue} from 'bullmq'

export const shapeQueue = new Queue('shapeQueue', {
    connection: {
        url: 'redis://localhost:6379'
    }
})