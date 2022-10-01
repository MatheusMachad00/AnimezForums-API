import { prisma } from "../config/database";

async function postsTotalStarsByUser(userId: number) {
  const result = await prisma.post.groupBy({
    by: ['userId'],
    where: { userId },
    _sum: {
      stars: true
    }
  });
  return result;
};

async function commentsTotalStarsByUser(userId: number) {
  const result = await prisma.comment.groupBy({
    by: ['userId'],
    where: { userId },
    _sum: {
      stars: true
    }
  });
  return result;
};

async function userData(id: number) {
  const result = await prisma.user.findUnique({ where: { id } });
  return result;
}

export const userRepository = {
  postsTotalStarsByUser,
  commentsTotalStarsByUser,
  userData
};

/* 

está somando somente uma tabela

SELECT users.id, users.username, users.avatar, SUM(comments.stars) as "totalStars"
FROM comments
join users on users.id = comments."userId"
GROUP BY users.id


*/