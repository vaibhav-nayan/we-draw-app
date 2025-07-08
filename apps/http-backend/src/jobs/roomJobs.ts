
import { addRoomJob } from "@repo/queue/producers/roomProducer";


export const queueDeleteRoom = async (roomId: number) =>{
    await addRoomJob({
        type: 'deleteRoom',
        payload: {
            roomId
        }
    })
}
