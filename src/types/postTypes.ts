import { Post } from "@prisma/client";

export type TypeNewPostData = Omit<Post, 'id'| 'stars'>;