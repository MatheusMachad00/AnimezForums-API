import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { commentSchema } from "../schemas/commentSchema";
import { commentController } from "../controllers/commentController";
import { validateToken } from "../middlewares/validateToken";

const router = express.Router();

router.post(
  "/post/:id/createComment",
  validateToken,
  validateSchemaMiddleware(commentSchema),
  commentController.createComment
);

router.get(
  "/comment/user/:id",
  validateToken,
  commentController.getCommentsByUser
);

router.post(
  "/comment/:id/star",
  validateToken,
  commentController.giveStar
);


export default router;