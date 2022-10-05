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
exports.commentController = void 0;
const commentService_1 = require("../services/commentService");
function createComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { verifiedToken } = res.locals;
        const { comment } = req.body;
        const { id } = req.params;
        const objData = {
            comment: String(comment),
            postId: Number(id),
            userId: Number(verifiedToken.id)
        };
        yield commentService_1.commentService.createComment(objData);
        res.sendStatus(201);
    });
}
;
function getCommentsByUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const result = yield commentService_1.commentService.getCommentsByUserId(Number(id));
        res.send(result).status(200);
    });
}
;
function giveStar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield commentService_1.commentService.giveStar(Number(id));
        res.sendStatus(200);
    });
}
exports.commentController = {
    createComment,
    getCommentsByUser,
    giveStar,
};
