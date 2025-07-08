import prisma from "../index.js";

export const createUser = async (
    {
        email,
        hashedPassword,
        name,
        avatar
    }
    : {
        email: string,
        hashedPassword: string,
        name: string,
        avatar: string
    }
) => {
    return prisma.user.create({
            data: {
                email : email,
                password : hashedPassword,
                name : name,
                avatar: avatar || ""
            }
        })
};

export const getUserByEmail = async (email: string) => {
    return prisma.user.findFirst({
        where: {
            email: email
        }
    });
};