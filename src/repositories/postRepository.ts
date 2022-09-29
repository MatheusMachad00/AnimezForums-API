import { prisma } from "../config/database";
import { TypeNewPostData } from "../types/postTypes";


async function createPost(post: TypeNewPostData) {
  await prisma.post.create({ data: post });
};

async function giveStar(id: number) {
  await prisma.post.update({
    where: { id },
    data: {
      stars: { ['increment']: 1 },
    },
  })
};

async function findById(id: number) {
  const result = await prisma.post.findUnique({
    where: { id },
  });
  return result;
};

async function findPostsByUserId(userId: number) {
  const result = await prisma.post.findMany({ where: { userId } });
  return result;
};

async function findPostsByAnimeId(animeId: number) {
  const result = await prisma.post.findMany({ where: { animeId } });
  return result;
};

export const postRepository = {
  createPost,
  giveStar,
  findById,
  findPostsByUserId,
  findPostsByAnimeId
};