import { TypeNewPostData, TypeNewPost } from "../types/postTypes";
import { postRepository } from "../repositories/postRepository";
import { animeRepository } from "../repositories/animeRepository";
import { commentRepository } from "../repositories/commentRepository";


async function createPost(post: TypeNewPost, animeName: string) {
  const animeId: any = await checkAnimeAndCreate(animeName);
  const postData = { ...post, animeId: animeId.id };
  console.log('eu sou createpost', animeName, postData);
  await postRepository.createPost(postData);
};

async function getAllPosts() {
  const result = await postRepository.getAllPosts();
  return result;
};

async function getPostById(id: number) {
  const result = await postRepository.findById(id);
  if (!result) throw { type: 'not_found', message: 'Post not found.' };
  const comments = await commentRepository.findCommentsByPostId(id);
  return { ...result, comments };
};

async function giveStar(id: number) {
  await findByIdOrFail(id);
  await postRepository.giveStar(id);
};

async function getPostsByUserId(userId: number) {
  const result = await postRepository.findPostsByUserId(userId);
  if (!result) throw { type: 'not_found', message: 'This user has no posts.' };
  return result;
};

async function findByIdOrFail(id: number) {
  const result = await postRepository.findById(id);
  if (!result) throw { type: 'not_found', message: 'Post not found.' };
  return result;
};

/* async function getPostByAnimeId(id: number){
  const result = await postRepository.findPostsByAnimeId(id);
  if (!result) throw { type: 'not_found', message: 'There are no posts about this anime.' };
  return result;
}; */

async function checkAnimeAndCreate(animeName: string) {
  const checkAnime = await animeRepository.findByName({ name: animeName });
  if (!checkAnime) {
    await animeRepository.createAnime({ name: animeName });
    return await animeRepository.findByName({ name: animeName });
  };
  return checkAnime;
};

export const postService = {
  createPost,
  giveStar,
  getPostsByUserId,
  getAllPosts,
  getPostById,
};