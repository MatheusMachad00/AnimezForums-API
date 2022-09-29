import { prisma } from "../config/database";
import { TypeNewCommentData } from "../types/commentTypes"

async function createComment(comment: TypeNewCommentData) {
  await prisma.comment.create({ data: comment });
};

async function giveStar(id: number) {
  await prisma.comment.update({
    where: { id },
    data: {
      stars: { ['increment']: 1 },
    },
  })
};

async function findPostsByUserId(userId: number) {
  const result = await prisma.post.findMany({ where: { userId } });
  return result;
};

async function findById(id: number) {
  const result = await prisma.post.findUnique({
    where: { id },
  });
  return result;
};

export const commentRepository = {
  createComment,
  giveStar,
  findPostsByUserId,
  findById,
};