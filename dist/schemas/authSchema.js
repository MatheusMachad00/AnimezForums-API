"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = exports.loginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required()
});
exports.signupSchema = joi_1.default.object({
    username: joi_1.default.string().min(1).max(50).required(),
    email: joi_1.default.string().email().max(100).required(),
    password: joi_1.default.string().min(6).required(),
    avatar: joi_1.default.string().uri().pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/)
});
