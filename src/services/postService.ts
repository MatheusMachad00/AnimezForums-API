import { TypeNewPostData } from "../types/postTypes";
import { postRepository } from "../repositories/postRepository";


async function createPost(post: TypeNewPostData) {
  await postRepository.createPost(post);
};

async function giveStar(id: number) {
  await findByIdOrFail(id);
  await postRepository.giveStar(id);
};

async function findByIdOrFail(id: number) {
  const result = await postRepository.findById(id);
  if (!result) throw { type: 'not_found', message: 'Post not found.' };

  return result;
};

export const postService = {
  createPost,
  giveStar
};