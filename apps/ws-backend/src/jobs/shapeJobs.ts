import { addShapeJob } from "@repo/queue/producers/shapeProducer"
import {Shape} from '../index'

export const queueDeleteShapes = async (shapeIds : number[]) =>{
    await addShapeJob({type: "deleteShapes", payload: {shapeIds}})
}

export const queueMoveRect = async (shapeId : number, dx : number, dy : number) =>{
    await addShapeJob({type: "moveRect", payload: {shapeId, dx, dy}})
}

export const queueMoveCircle = async (shapeId : number, dx : number, dy : number) =>{
    await addShapeJob({type: "moveCircle", payload: {shapeId, dx, dy}})
}

export const queueMoveLine = async (shapeId : number, dx : number, dy : number) =>{
    await addShapeJob({type: "moveLine", payload: {shapeId, dx, dy}})
}

export const queueMovePencil = async (shapeId : number, dx : number, dy : number) =>{
    await addShapeJob({type: "movePencil", payload: {shapeId, dx, dy}})
}

export const queueMoveText = async (shapeId : number, dx : number, dy : number) =>{
    await addShapeJob({type: "moveText", payload: {shapeId, dx, dy}})
}

export const queueUpdateRect = async (shapeId : number, shape: Shape) =>{
    await addShapeJob({type: "updateRect", payload: {shapeId, shape}})
}

export const queueUpdateCircle = async (shapeId : number, shape: Shape) =>{
    await addShapeJob({type: "updateCircle", payload: {shapeId, shape}})
}

export const queueUpdateLine = async (shapeId : number, shape: Shape) =>{
    await addShapeJob({type: "updateLine", payload: {shapeId, shape}})
}

export const queueUpdateText = async (shapeId : number, shape: Shape) =>{
    await addShapeJob({type: "updateText", payload: {shapeId, shape}})
}