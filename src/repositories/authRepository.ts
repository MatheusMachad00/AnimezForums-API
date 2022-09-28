import { prisma } from "../config/database";
import { TypeNewUserData } from "../types/userTypes";

async function checkEmail(email: string) {
  const result = await prisma.user.findFirst({ where: { email } });
  return result;
};

async function checkUsername(username: string) {
  const result = await prisma.user.findFirst({ where: { username } });
  return result;
};

async function createUser(user: TypeNewUserData) {
  await prisma.user.create({ data: user });
};

async function findById(id: number) {
  const result = await prisma.user.findFirst({ where: { id } });
  return result;
};

export const authRepository = {
  checkEmail,
  checkUsername,
  createUser,
  findById
};