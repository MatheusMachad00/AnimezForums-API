import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  const KEY_JWT = process.env.JWT_SECRET;

  const verified = jwt.verify(String(token), String(KEY_JWT));
  console.log(verified)
  if (!verified) throw { type: 'unauthorized' };

  res.locals.verifiedToken = verified;
  next();
}