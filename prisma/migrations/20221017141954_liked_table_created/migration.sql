-- CreateTable
CREATE TABLE "PostLiked" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PostLiked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentLiked" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CommentLiked_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostLiked" ADD CONSTRAINT "PostLiked_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostLiked" ADD CONSTRAINT "PostLiked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentLiked" ADD CONSTRAINT "CommentLiked_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentLiked" ADD CONSTRAINT "CommentLiked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
