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
exports.commentRepository = void 0;
const database_1 = require("../config/database");
function createComment(comment) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.comment.create({ data: comment });
    });
}
;
function giveStar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.comment.update({
            where: { id },
            data: {
                stars: { ['increment']: 1 },
            },
        });
    });
}
;
function findCommentsByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.comment.findMany({ where: { userId } });
        return result;
    });
}
;
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.comment.findUnique({
            where: { id },
        });
        return result;
    });
}
;
exports.commentRepository = {
    createComment,
    giveStar,
    findCommentsByUserId,
    findById,
};
