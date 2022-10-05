"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const postService_1 = require("../services/postService");
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { verifiedToken } = res.locals;
        const { title, anime, description } = req.body;
        const objData = {
            title,
            description,
            userId: verifiedToken.id,
        };
        yield postService_1.postService.createPost(objData, anime);
        res.sendStatus(201);
    });
}
;
function getAllPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postService_1.postService.getAllPosts();
        res.send(result).status(200);
    });
}
;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const result = yield postService_1.postService.getPostById(Number(id));
        res.send(result).status(200);
    });
}
;
function getPostByUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const result = yield postService_1.postService.getPostsByUserId(Number(id));
        res.send(result).status(200);
    });
}
;
function giveStar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield postService_1.postService.giveStar(Number(id));
        res.sendStatus(200);
    });
}
;
exports.postController = {
    createPost,
    giveStar,
    getAllPosts,
    getById,
    getPostByUser
};
