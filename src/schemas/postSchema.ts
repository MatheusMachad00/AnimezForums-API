import joi from "joi";

export const postSchema = joi.object({
  title: joi.string().min(1).max(100).required(),
  anime: joi.string().min(1).required(),
  description: joi.string().min(1).required()
});
