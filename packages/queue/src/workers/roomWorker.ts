import { Worker, Job } from "bullmq";
import { RoomJobPayload } from "../producers/roomProducer.js";
import {deleteRoomById} from "@repo/db/rooms";

const connection = {
    url: 'redis://localhost:6379'
}

const roomWorker = new Worker(
    'roomQueue',
    async function (job: Job<RoomJobPayload>) {
        const {type} = job.data;
        
        if(type === 'deleteRoom'){
            const {payload} = job.data;
            await deleteRoomById(payload.roomId);
        }
    },
    {
        connection,
        concurrency: 5
    }
)


roomWorker.on('completed', (job) =>{
    console.log(`Job completed: ${job.id}`)
})

roomWorker.on('failed', (job, err) => {
    console.log(`Job failed: ${job?.id} with error: ${err.message}`)
})