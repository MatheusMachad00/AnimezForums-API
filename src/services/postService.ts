import { TypeNewPostData, TypeNewPost } from "../types/postTypes";
import { postRepository } from "../repositories/postRepository";
import { animeRepository } from "../repositories/animeRepository";
import { TypeNewAnimeData } from "../types/animesTypes";

async function createPost(post: TypeNewPost, animeName: TypeNewAnimeData) {
  const animeId: any = checkAnimeAndCreate(animeName);
  const postData = { ...post, animeId: animeId.id }
  await postRepository.createPost(postData);
};

async function giveStar(id: number) {
  await findByIdOrFail(id);
  await postRepository.giveStar(id);
};

async function getPostsByUserId(userId: number) {
  const result = await postRepository.findPostsByUserId(userId);
  return result;
};

async function findByIdOrFail(id: number) {
  const result = await postRepository.findById(id);
  if (!result) throw { type: 'not_found', message: 'Post not found.' };

  return result;
};

async function checkAnimeAndCreate(animeName: TypeNewAnimeData) {
  const checkAnime = await animeRepository.findByName(animeName);
  if (!checkAnime) {
    await animeRepository.createAnime(animeName);
    return await animeRepository.findByName(animeName);
  };
  return checkAnime;
};

export const postService = {
  createPost,
  giveStar,
  getPostsByUserId,
};