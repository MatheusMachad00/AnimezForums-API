import { Request, Response } from 'express';
import { postService } from '../services/postService';
import { TypeNewPostData } from '../types/postTypes';

//falta resolver a parte do animeId
async function createPost(req: Request, res: Response) {
  const { verifiedToken } = res.locals;
  const { title, anime, description } = req.body;
  const objData = {
    title,
    description,
    userId: verifiedToken.id,
    animeId: anime
  };

  await postService.createPost(objData);
  res.sendStatus(201);
};

//pegar pelo req.params ou req.body o id da postagem?
async function giveStar(req: Request, res: Response) {

};

export const postController = {
  createPost,
  giveStar
};