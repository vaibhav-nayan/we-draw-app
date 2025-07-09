import {createClient, RedisClientType} from 'redis'

import dotenv from "dotenv";
dotenv.config();

// const url = process.env.REDIS_URL;

// console.log("Redis URL: ", process.env.REDIS_URL);
// if (!process.env.REDIS_URL) {
//   throw new Error("Missing REDIS_URL environment variable");
// }

export const queueRedis : RedisClientType = createClient({
    url : process.env.REDIS_URL
})

queueRedis.on('error', (err) => console.log('Redis Client Error: ', err));

(async () => {
  try {
    await queueRedis.connect();
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
  }
})();