import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { TypeNewUserData, TypeNewLogin } from "../types/userTypes";
import { authRepository } from '../repositories/authRepository';

async function signup(signupData: TypeNewUserData) {
  const { username, email, password } = signupData
  const SALT = 10;
  const encryptedPassword = bcrypt.hashSync(password, SALT);

  const emailExists = await checkEmail(email);
  if (emailExists) throw { type: 'conflict', message: 'Email already registered.' };

  const usernameExists = await authRepository.checkUsername(username);
  if (usernameExists) throw { type: 'conflict', message: 'Username already registered.' };

  await authRepository.createUser({ ...signupData, password: encryptedPassword });
};

async function login(login: TypeNewLogin) {
  const KEY_JWT = process.env.JWT_SECRET;
  const data = login;

  const isEmailValid = checkEmail(data.email);
  if (!isEmailValid) throw { type: 'conflict', message: 'Email already registered.' };

  const { id, username, email, avatar } = await getUserOrFail(data);
  const token = jwt.sign({ id, username, email, avatar }, String(KEY_JWT));

  return {token, id, username, avatar};
};


async function checkEmail(email: string) {
  const emailExists = await authRepository.checkEmail(email);
  return emailExists;
};

async function getUserOrFail(login: TypeNewLogin) {
  const user = await authRepository.checkEmail(login.email);
  if (!user) throw { type: 'unauthorized', message: 'Wrong email or password' };

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw { type: 'unauthorized', message: 'Wrong email or password' };

  return user;
};

export const authService = {
  signup,
  login
};