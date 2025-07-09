import {Worker, Job} from 'bullmq'
import { ShapeJobPayload } from '../producers/shapeProducer.js'
import {deleteManyShapes, updateCircleByShape, updateLineByShape, updatePositionCircle, updatePositionLine, updatePositionPencil, updatePositionRectangle, updatePositionText, updateRectByShape, updateTextByShape } from '@repo/db/shapes';
import dotenv from "dotenv";
dotenv.config();

const connection = {
    url: process.env.REDIS_URL
}

const shapeWorker = new Worker<ShapeJobPayload> (
    'shapeQueue',
    async (job: Job<ShapeJobPayload>) =>{
        const {type} = job.data;

        if(type === 'moveRect'){
            const {payload} = job.data;
            await updatePositionRectangle(payload.shapeId, payload.dx, payload.dy);
        }
        else if(type === 'moveCircle'){
            const {payload} = job.data;
            await updatePositionCircle(payload.shapeId, payload.dx, payload.dy);
        }
        else if (type ==='moveLine'){
            const {payload} = job.data;
            await updatePositionLine(payload.shapeId, payload.dx, payload.dy);
        }
        else if (type ==='movePencil'){
            const {payload} = job.data;
            await updatePositionPencil(payload.shapeId, payload.dx, payload.dy);
        }
        else if (type ==='moveText'){
            const {payload} = job.data;
            await updatePositionText(payload.shapeId, payload.dx, payload.dy);
        }
        else if(type === 'updateRect'){
            const {payload} = job.data;
            await updateRectByShape(payload.shapeId, payload.shape);
        }
        else if(type === 'updateCircle'){
            const {payload} = job.data;
            await updateCircleByShape(payload.shapeId, payload.shape);
        }
        else if(type === 'updateLine'){
            const {payload} = job.data;
            await updateLineByShape(payload.shapeId, payload.shape);
        }
        else if(type === 'updateText'){
            const {payload} = job.data;
            await updateTextByShape(payload.shapeId, payload.shape);
        }
        else if(type === 'deleteShapes'){
            const {payload} = job.data;
            await deleteManyShapes(payload.shapeIds);
        }
        else {
            console.log('Invalid job type');
        }
    },
    {
        connection,
        concurrency: 5
    }
)

shapeWorker.on('completed', (job) =>{
    console.log(`Job completed: ${job.id}`)
})

shapeWorker.on('failed', (job, err) => {
    console.log(`Job failed: ${job?.id} with error: ${err.message}`)
})