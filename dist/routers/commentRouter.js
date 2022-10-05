"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateSchema_1 = require("../middlewares/validateSchema");
const commentSchema_1 = require("../schemas/commentSchema");
const commentController_1 = require("../controllers/commentController");
const validateToken_1 = require("../middlewares/validateToken");
const router = express_1.default.Router();
router.post("/post/:id/createComment", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(commentSchema_1.commentSchema), commentController_1.commentController.createComment);
router.get("/comment/user/:id", validateToken_1.validateToken, commentController_1.commentController.getCommentsByUser);
router.post("/comment/:id/star", validateToken_1.validateToken, commentController_1.commentController.giveStar);
exports.default = router;
