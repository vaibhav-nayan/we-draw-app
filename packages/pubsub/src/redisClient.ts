import { createClient, RedisClientType } from "redis";
import { REDIS_URL } from '@repo/backend-common/config'

export const pub : RedisClientType = createClient({url: REDIS_URL});
export const sub: RedisClientType = createClient({url: REDIS_URL})

pub.on('error', (err) => console.error('Pub Redis error: ', err));
sub.on('error', (err) => console.error('Sub Redis error: ', err));

export const connectPubSubsClients = async () => {
    await Promise.all([pub.connect(), sub.connect()]);
}