import {createClient, RedisClientType} from 'redis'
const url = process.env.ENV === 'production' ? process.env.REDIS_URL : 'redis://localhost:6379';

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