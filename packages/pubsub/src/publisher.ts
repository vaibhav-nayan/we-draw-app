import {pub} from './redisClient.js'
import type {RoomEvent} from './types.js'

export const publishToRoom = async (roomId: string, event: Omit<RoomEvent, 'senderId'>, senderId?: string): Promise<void> =>{
    await pub.publish(`room:${roomId}`, JSON.stringify({...event, senderId}))
}

export const publishToSystem = async (roomId: string, event: Omit<RoomEvent, 'senderId'>, senderId? : string) =>{
    await pub.publish(`room:${roomId}:system`, JSON.stringify({...event, senderId}));
}