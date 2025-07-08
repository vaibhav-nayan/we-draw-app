import prisma from '../index.js';

export const createNewRoom = async (slug: string, adminId: string) => {
    return prisma.room.create({data: {slug, adminId}});
}

export const deleteRoomById = async (roomId: number) =>{
    return prisma.room.delete({where: {id: roomId}});
}

export const getAllRoomsPerUser = async (adminId : string) =>{
    return prisma.room.findMany({where: {adminId}});
}

export const getRoomById = async (roomId : number) =>{
    return prisma.room.findUnique({where: {id: roomId}});
}

export const getRoomBySlug = async (slug: string) =>{
    return prisma.room.findUnique({where: {slug}});
}