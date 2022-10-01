import express from "express";
import { validateToken } from "../middlewares/validateToken";
import { userController } from "../controllers/userController";

const router = express.Router();

router.get(
  "/userProfile/:id",
  validateToken,
  userController.userProfile
);

export default router;