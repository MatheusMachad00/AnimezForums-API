"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateSchema_1 = require("../middlewares/validateSchema");
const postSchema_1 = require("../schemas/postSchema");
const validateToken_1 = require("../middlewares/validateToken");
const postController_1 = require("../controllers/postController");
const router = express_1.default.Router();
router.post("/post/create", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(postSchema_1.postSchema), postController_1.postController.createPost);
router.get("/post/getAll", validateToken_1.validateToken, postController_1.postController.getAllPosts);
router.get("/post/:id", validateToken_1.validateToken, postController_1.postController.getById);
router.post("/post/star/:id", validateToken_1.validateToken, postController_1.postController.giveStar);
router.get("/post/postsByUsers/:id", validateToken_1.validateToken, postController_1.postController.getPostByUser);
router.get("/post/postsByanimes/:id", validateToken_1.validateToken);
exports.default = router;
