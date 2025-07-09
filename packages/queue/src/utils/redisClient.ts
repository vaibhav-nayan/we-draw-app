import {createClient, RedisClientType} from 'redis'
const url = process.env.REDIS_URL;

console.log("Redis URL: ", url);
if (!process.env.REDIS_URL) {
  throw new Error("Missing REDIS_URL environment variable");
}

export const queueRedis : RedisClientType = createClient({
    url : url
})

queueRedis.on('error', (err) => console.log('Redis Client Error: ', err));

(async () => {
  try {
    await queueRedis.connect();
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
  }
})();