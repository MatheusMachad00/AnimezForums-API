import { Request, Response } from 'express';
import { commentService } from '../services/commentService';

async function createComment(req: Request, res: Response) {
  const { verifiedToken } = res.locals;
  const { comment } = req.body;
  const { id } = req.params;

  const objData = {
    comment: String(comment),
    postId: Number(id),
    userId: Number(verifiedToken.id)
  };

  await commentService.createComment(objData);
  res.sendStatus(201);
};


async function getCommentsByUser(req: Request, res: Response) {
  const { id } = req.params;
  const result = await commentService.getCommentsByUserId(Number(id));
  res.send(result).status(200);
};

async function giveStar(req: Request, res: Response) {
  const { id } = req.params;
  await commentService.giveStar(Number(id));
  res.sendStatus(200);
}

export const commentController = {
  createComment,
  getCommentsByUser,
  giveStar,
};