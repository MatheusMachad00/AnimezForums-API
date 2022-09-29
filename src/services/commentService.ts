import { TypeNewCommentData } from "../types/commentTypes";
import { commentRepository } from "../repositories/commentRepository";

async function createComment(comment: TypeNewCommentData) {
  await commentRepository.createComment(comment);
};

async function giveStar(id: number) {
  await findByIdOrFail(id);
  await commentRepository.giveStar(id);
};

async function getCommentsByUserId(userId: number) {
  const result = await commentRepository.findPostsByUserId(userId);
  return result;
};

async function findByIdOrFail(id: number) {
  const result = await commentRepository.findById(id);
  if (!result) throw { type: 'not_found', message: 'Post not found.' };

  return result;
};

export const commentService = {
  createComment,
  giveStar,
  getCommentsByUserId
};