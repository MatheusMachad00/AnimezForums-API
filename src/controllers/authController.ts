import { Request, Response } from 'express';
import { authService } from '../services/authService'
import { TypeNewUserData, TypeNewLogin } from '../types/userTypes';

async function signup(req: Request, res: Response) {
  const signupData: TypeNewUserData = req.body;
  await authService.signup(signupData);
  res.sendStatus(201);
};

async function login(req: Request, res: Response) {
  const userData: TypeNewLogin = req.body;
  const result = await authService.login(userData);
  res.send({ token: result }).status(200);
};

export const authController = {
  signup,
  login
}