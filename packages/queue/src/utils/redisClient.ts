import {createClient, RedisClientType} from 'redis'

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