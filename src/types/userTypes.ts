import { User } from "@prisma/client";

export type TypeNewUserData = Omit<User, 'id'>;