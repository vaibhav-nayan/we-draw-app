import { roomQueue } from "../queues/roomQueue.js";

export type RoomJobPayload ={
        type : 'deleteRoom',
        payload: {
            roomId: number
        }
    }

export const addRoomJob = async (job: RoomJobPayload) =>{
    await roomQueue.add(job.type, job, {
        attempts: 3,
        removeOnComplete: true,
        backoff: {
            type: "exponential",
            delay: 1000
        }
    })
}