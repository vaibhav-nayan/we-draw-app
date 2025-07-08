import {createClient, RedisClientType} from 'redis'

export const queueRedis : RedisClientType = createClient({
    url : 'redis://localhost:6379'
})

queueRedis.on('error', (err) => console.log('Redis Client Error: ', err));

await queueRedis.connect();