import { Post } from "@prisma/client";

export type TypeNewPostData = Omit<Post, 'id'| 'stars'>;
export type TypeNewPost = Omit<Post, 'id'| 'stars' | 'animeId'>;