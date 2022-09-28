import joi from "joi";

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
});

export const signupSchema = joi.object({
  username: joi.string().min(1).max(50).required(),
  email: joi.string().email().max(100).required(),
  password: joi.string().min(6).required(),
  avatar: joi.string().uri().pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/)
});