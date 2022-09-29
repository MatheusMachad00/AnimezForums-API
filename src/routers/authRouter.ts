import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { loginSchema, signupSchema } from "../schemas/authSchema";
import { authController } from "../controllers/authController";

const router = express.Router();

router.post(
  "/login",
  validateSchemaMiddleware(loginSchema),
  authController.login
);

router.post(
  "/signup",
  validateSchemaMiddleware(signupSchema),
  authController.signup
);

export default router;