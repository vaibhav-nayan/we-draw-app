import {sub} from './redisClient.js'
import type {RoomEvent} from './types.js'

type BroadcastFunction = (roomId: string, event: RoomEvent, senderId?: string) => void;

export const setupSubscriber = (broadcastFn : BroadcastFunction) => {
    sub.pSubscribe('room:*', (message, channel) =>{
        const [_,roomId, suffix] = channel.split(':');
        console.log("SetupSubscriber Logs")
        console.log(channel)
        console.log(roomId, suffix)
        if(!roomId) return;
        const event = JSON.parse(message) as RoomEvent;

        const {senderId , ...cleanedEvent} = event;

        if(suffix === 'system'){
            if(event.type === "user_joined"){
                broadcastFn(roomId, cleanedEvent, senderId)
            }
            if(event.type === "user_left"){
                broadcastFn(roomId, cleanedEvent, senderId)
            }
        }
        else {
            broadcastFn(roomId, cleanedEvent, senderId);
        }
    })
}