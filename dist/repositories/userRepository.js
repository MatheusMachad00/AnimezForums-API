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
exports.userRepository = void 0;
const database_1 = require("../config/database");
function postsTotalStarsByUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.post.groupBy({
            by: ['userId'],
            where: { userId },
            _sum: {
                stars: true
            }
        });
        return result;
    });
}
;
function commentsTotalStarsByUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.comment.groupBy({
            by: ['userId'],
            where: { userId },
            _sum: {
                stars: true
            }
        });
        return result;
    });
}
;
function userData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.user.findUnique({ where: { id } });
        return result;
    });
}
exports.userRepository = {
    postsTotalStarsByUser,
    commentsTotalStarsByUser,
    userData
};
/*

está somando somente uma tabela

SELECT users.id, users.username, users.avatar, SUM(comments.stars) as "totalStars"
FROM comments
join users on users.id = comments."userId"
GROUP BY users.id


*/ 
