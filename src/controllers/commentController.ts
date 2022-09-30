import { Request, Response } from 'express';
import { commentService } from '../services/commentService';
import { TypeNewCommentData } from '../types/commentTypes';

async function createComment(req: Request, res: Response) {
  const { verifiedToken } = res.locals;
  const { comment } = req.body;
  const id = req.params;

  const objData = {
    comment: String(comment),
    postId: Number(id),
    userId: Number(verifiedToken.id)
  };

  await commentService.createComment(objData);
  res.sendStatus(201);
};


export const commentController = {
  createComment,

}