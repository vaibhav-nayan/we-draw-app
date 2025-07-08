
import { connectPubSubsClients } from "./redisClient.js";
import { setupSubscriber } from "./subscriber.js";
import type {RoomEvent} from './types.js'

type BroadcastFunction = (roomId: string, event: Omit<RoomEvent, 'senderId'>, senderId? : string) => void;

export const initPubSub = async(broadcastFn: BroadcastFunction) =>{
    await connectPubSubsClients();
    setupSubscriber(broadcastFn);
}