import {createClient, RedisClientType} from 'redis'

export const queueRedis : RedisClientType = createClient({
    url : process.env.REDIS_URL
})

queueRedis.on('error', (err) => console.log('Redis Client Error: ', err));

await queueRedis.connect();