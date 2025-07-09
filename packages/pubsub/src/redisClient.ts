import { createClient, RedisClientType } from "redis";
import dotenv from "dotenv";
dotenv.config();
// const url = process.env.REDIS_URL;

// console.log("Redis URL: ", process.env.REDIS_URL);
// if (!process.env.REDIS_URL) {
//   throw new Error("Missing REDIS_URL environment variable");
// }

export const pub : RedisClientType = createClient({
    url: process.env.REDIS_URL
});
export const sub: RedisClientType = createClient({
    url: process.env.REDIS_URL
})

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