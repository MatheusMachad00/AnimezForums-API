import { Request, Response } from 'express';
import { postService } from '../services/postService';


async function createPost(req: Request, res: Response) {
  const { verifiedToken } = res.locals;
  const { title, anime, description } = req.body;
  const objData = {
    title,
    description,
    userId: verifiedToken.id,
  };
  await postService.createPost(objData, anime);
  res.sendStatus(201);
};

async function getAllPosts(req: Request, res: Response) {
  const result = await postService.getAllPosts();
  res.send(result).status(200);
};

async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const result = await postService.getPostById(Number(id));
  res.send(result).status(200);
};

async function getPostByUser(req: Request, res: Response) {
  const { id } = req.params;
  const result = await postService.getPostsByUserId(Number(id));
  res.send(result).status(200);
};

//pegar pelo req.params ou req.body o id da postagem?
async function giveStar(req: Request, res: Response) {

};

export const postController = {
  createPost,
  giveStar,
  getAllPosts,
  getById,
  getPostByUser
};