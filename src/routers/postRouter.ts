import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { postSchema } from "../schemas/postSchema";
import { validateToken } from "../middlewares/validateToken";
import { postController } from "../controllers/postController";

const router = express.Router();

router.post(
  "/post/create",
  validateToken,
  validateSchemaMiddleware(postSchema),
  postController.createPost
);

router.post(
  "/post/star/:id",
  validateToken,
  postController.giveStar
);

router.get(
  "/post/postsByUsers/:id",
  validateToken,

);

router.get(
  "/post/postsByanimes/:id",
  validateToken,
  
);

export default router;