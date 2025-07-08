import { PrismaClient } from "../generated/client/client.js";

const prisma = new PrismaClient();


export * from './users/index.js';
export * from './shapes/index.js';
export * from './rooms/index.js';

export default prisma;