import { Shape } from "../utils/types.js";
import { shapeQueue } from "../queues/shapeQueue.js";

export type ShapeJobPayload =
    | {
        type: 'moveRect',
        payload: {
            shapeId: number,
            dx: number,
            dy: number
        }
    }
    | {
        type: 'moveCircle',
        payload: {
            shapeId: number,
            dx: number,
            dy: number
        }
    }
    | {
        type: 'moveLine',
        payload: {
            shapeId: number,
            dx: number,
            dy: number
        }
    }
    | {
        type: 'movePencil',
        payload: {
            shapeId: number,
            dx: number,
            dy: number
        }
    }
    | {
        type: 'moveText',
        payload: {
            shapeId: number,
            dx: number,
            dy: number
        }
    }
    | {
        type: 'updateRect',
        payload: {
            shapeId: number,
            shape: Shape
        }
    }
    | {
        type: 'updateCircle',
        payload: {
            shapeId: number,
            shape: Shape
        }
    }
    | {
        type: 'updateLine',
        payload: {
            shapeId: number,
            shape: Shape
        }
    }
    | {
        type: 'updateText',
        payload: {
            shapeId: number,
            shape: Shape
        }
    }
    | {
        type: 'deleteShapes',
        payload: {
            shapeIds: number[]
        }
    }
export const addShapeJob = async (job: ShapeJobPayload) =>{
    await shapeQueue.add(job.type, job, {
        attempts: 3,
        removeOnComplete: true,
        backoff: {
            type: 'exponential',
            delay: 1000
        }
    })
}