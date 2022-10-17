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
  const homeData = await postRepository.getAllPosts();
  const postsLiked = await postRepository.getPostsLiked();
  return {homeData, postsLiked}
};

async function getPostById(id: number) {
  const result = await postRepository.findById(id);
  if (!result) throw { type: 'not_found', message: 'Post not found.' };
  const comments = await commentRepository.findCommentsByPostId(id);
  return { ...result, comments };
};

async function giveStar(postId: number, userId: number) {
  await findByIdOrFail(postId);
  await postRepository.giveStar(postId);
  await postLiked(postId, userId)
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

async function postLiked(postId: number, userId: number) {
  await postRepository.savePostLiked(postId, userId);
};

export const postService = {
  createPost,
  giveStar,
  getPostsByUserId,
  getAllPosts,
  getPostById,
};