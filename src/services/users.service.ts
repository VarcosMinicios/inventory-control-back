import prisma from "../database";
import type { User } from "../interfaces/User";

export const storeUser = async (data: User) => {
  return prisma.user.create({ data });
}

export const listUsers = async () => {
  return prisma.user.findMany();
}

export const getUser = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
}

export const updateUser = async (id: number, data: Partial<User>) => {
  return prisma.user.update({ where: { id }, data });
}

export const deleteUser = async (id: number) => {
  return prisma.user.delete({ where: { id } });
}
