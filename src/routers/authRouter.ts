import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { loginSchema, signupSchema } from "../schemas/authSchema";
import { signup, login } from "../controllers/authController";

const router = express.Router();

router.post(
  "/login",
  validateSchemaMiddleware(loginSchema),
  login
);

router.post(
  "/signup",
  validateSchemaMiddleware(signupSchema),
  signup  
);

export default router;