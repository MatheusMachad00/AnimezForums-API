"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const router = (0, express_1.Router)();
router.use(authRouter_1.default);
router.use(postRouter_1.default);
router.use(commentRouter_1.default);
router.use(userRouter_1.default);
exports.default = router;
