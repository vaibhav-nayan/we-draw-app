import {createClient, RedisClientType} from 'redis'
import {REDIS_URL} from '@repo/backend-common/config'

export const queueRedis : RedisClientType = createClient({
    url : REDIS_URL
})

queueRedis.on('error', (err) => console.log('Redis Client Error: ', err));

await queueRedis.connect();