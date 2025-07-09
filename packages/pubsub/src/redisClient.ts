import { createClient, RedisClientType } from "redis";
const url = process.env.ENV === 'production' ? process.env.REDIS_URL : 'redis://localhost:6379';

export const pub : RedisClientType = createClient({url: url});
export const sub: RedisClientType = createClient({url: url})

pub.on('error', (err) => console.error('Pub Redis error: ', err));
sub.on('error', (err) => console.error('Sub Redis error: ', err));

export const connectPubSubsClients = async () => {
    try {
        await Promise.all([pub.connect(), sub.connect()]);
    }
    catch (err) {
        console.error("Failed to connect to PubSub Redis:", err);
    }
}