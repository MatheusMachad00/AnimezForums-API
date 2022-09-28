import { NextFunction, Request, Response } from 'express';

type ERRORS = {
  [key: string]: number
}

const ERRORS: ERRORS = {
  unauthorized: 401,
  conflict: 409,
  not_found: 404,
  bad_request: 400,
  token_invalid: 498,
  unprocessable_entity: 422
};

export default function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  const type: string = err.type;
  let statusCode = ERRORS[type];
  if (!statusCode) statusCode = 500; // any other types

  return res.sendStatus(statusCode); // internal server error
}