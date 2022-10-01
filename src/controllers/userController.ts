import { Request, Response } from 'express';
import { userService } from '../services/userService';

async function userProfile(req: Request, res: Response) {
  const { id } = req.params;
  const userData = await userService.userData(Number(id))
  const totalStars = await userService.getAllStars(Number(id));
  res.send({...userData, totalStars: totalStars}).status(200);
};

export const userController = {
  userProfile,
};