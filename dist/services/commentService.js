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
exports.commentService = void 0;
const commentRepository_1 = require("../repositories/commentRepository");
function createComment(comment) {
    return __awaiter(this, void 0, void 0, function* () {
        yield commentRepository_1.commentRepository.createComment(comment);
    });
}
;
function giveStar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield findByIdOrFail(id);
        yield commentRepository_1.commentRepository.giveStar(id);
    });
}
;
function getCommentsByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield commentRepository_1.commentRepository.findCommentsByUserId(userId);
        if (!result)
            throw { type: 'not_found', message: 'This user has no comments.' };
        return result;
    });
}
;
function findByIdOrFail(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield commentRepository_1.commentRepository.findById(id);
        if (!result)
            throw { type: 'not_found', message: 'Post not found.' };
        return result;
    });
}
;
exports.commentService = {
    createComment,
    giveStar,
    getCommentsByUserId
};
