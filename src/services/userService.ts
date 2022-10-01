import { userRepository } from "../repositories/userRepository";

async function getAllStars(userId: number) {
  let postStars: any = await userRepository.postsTotalStarsByUser(userId);
  let commentStars: any = await userRepository.commentsTotalStarsByUser(userId);
  /* if (postStars.length === 0) return postStars = 0;
  if (commentStars.length === 0) return commentStars = 0;
  return (postStars[0]._sum.stars + commentStars[0]._sum.stars); */

  if (postStars.length === 0 && commentStars.length === 0) {
    return 0;
  } else if (postStars.length === 0 && commentStars.length !== 0) {
    return commentStars[0]._sum.stars;
  } else if (postStars.length !== 0 && commentStars.length === 0) {
    return postStars[0]._sum.stars;
  } else return (postStars[0]._sum.stars + commentStars[0]._sum.stars);
};

async function userData(userId: number) {
  const result = await userRepository.userData(userId);
  if (!result) throw { type: 'not_found', message: 'User not found.' };
  const { id, username, avatar } = result;
  return { id, username, avatar };
};

export const userService = {
  getAllStars,
  userData
};