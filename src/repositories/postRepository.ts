import { prisma } from "../config/database";
import { TypeNewPostData } from "../types/postTypes";


async function createPost(post: TypeNewPostData) {
  await prisma.post.create({data: post}); 
};

async function giveStar(id: number) {
  await prisma.post.update({
    where: { id },
    data: {
      stars: { ['increment']: 1 },
    },
  })
};

export const postRepository = {
  createPost,
  giveStar
};