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

async function savePostLiked(postId: number, userId: number) {
  await prisma.postLiked.create({ data: { postId, userId } });
};

async function getAllPosts() {
  const result = await prisma.$queryRaw`
  SELECT posts.*, users.username AS "postOwner", users.avatar AS "postOwnerAvatar" FROM posts 
  JOIN users
  ON posts."userId" = users.id`
  return result;
};

async function findById(id: number) {
  const result = await prisma.post.findUnique({
    where: { id },
    include: {
      users: {
        select: {
          avatar: true,
          username: true
        }
      }
    }
  });
  return result;
};

async function findPostsByUserId(userId: number) {
  const result = await prisma.post.findMany({
    where: { userId },
    include: {
      users: {
        select: {
          avatar: true,
          username: true,
        }
      }
    }
  });
  return result;
};

async function findPostsByAnimeId(animeId: number) {
  const result = await prisma.post.findMany({ where: { animeId } });
  return result;
};

async function postsTotalStarsByUser(userId: number) {
  const result = await prisma.post.groupBy({
    by: ['stars'],
    where: { userId },
    _sum: {
      stars: true
    }
  });
  return result;
};

async function getPostsLiked() {
  const result = await prisma.postLiked.findMany();
  return result;
};

export const postRepository = {
  createPost,
  giveStar,
  findById,
  findPostsByUserId,
  findPostsByAnimeId,
  getAllPosts,
  postsTotalStarsByUser,
  savePostLiked,
  getPostsLiked
};