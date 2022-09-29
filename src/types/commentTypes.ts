import { Comment } from "@prisma/client";

export type TypeNewCommentData = Omit<Comment, 'id' | 'stars'>;