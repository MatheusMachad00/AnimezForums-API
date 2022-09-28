import { User } from "@prisma/client";

export type TypeNewUserData = Omit<User, 'id'>;
export type TypeNewLogin = Omit<User, 'id' | 'username' | 'avatar'>;