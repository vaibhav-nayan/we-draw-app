import { createClient, RedisClientType } from "redis";

export const pub : RedisClientType = createClient({url: 'redis://localhost:6379'});
export const sub: RedisClientType = createClient({url: 'redis://localhost:6379'})

pub.on('error', (err) => console.error('Pub Redis error: ', err));
sub.on('error', (err) => console.error('Sub Redis error: ', err));

export const connectPubSubsClients = async () => {
    await Promise.all([pub.connect(), sub.connect()]);
}