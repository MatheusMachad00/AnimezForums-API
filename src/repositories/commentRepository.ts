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

async function findCommentsByUserId(userId: number) {
  const result = await prisma.comment.findMany({ where: { userId } });
  return result;
};

async function findCommentsByPostId(id: number) {
  const result = await prisma.$queryRaw`
  SELECT comments.*, users.username AS "commentOwner", users.avatar AS "commentOwnerAvatar" FROM comments 
  JOIN users
  ON comments."userId" = users.id
  where "postId" = ${id}
  `
  return result;
}

async function findById(id: number) {
  const result = await prisma.comment.findUnique({
    where: { id },
  });
  return result;
};

export const commentRepository = {
  createComment,
  giveStar,
  findCommentsByUserId,
  findById,
  findCommentsByPostId,
};