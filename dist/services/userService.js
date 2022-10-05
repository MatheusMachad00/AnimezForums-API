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
exports.userService = void 0;
const userRepository_1 = require("../repositories/userRepository");
function getAllStars(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        let postStars = yield userRepository_1.userRepository.postsTotalStarsByUser(userId);
        let commentStars = yield userRepository_1.userRepository.commentsTotalStarsByUser(userId);
        /* if (postStars.length === 0) return postStars = 0;
        if (commentStars.length === 0) return commentStars = 0;
        return (postStars[0]._sum.stars + commentStars[0]._sum.stars); */
        if (postStars.length === 0 && commentStars.length === 0) {
            return 0;
        }
        else if (postStars.length === 0 && commentStars.length !== 0) {
            return commentStars[0]._sum.stars;
        }
        else if (postStars.length !== 0 && commentStars.length === 0) {
            return postStars[0]._sum.stars;
        }
        else
            return (postStars[0]._sum.stars + commentStars[0]._sum.stars);
    });
}
;
function userData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield userRepository_1.userRepository.userData(userId);
        if (!result)
            throw { type: 'not_found', message: 'User not found.' };
        const { id, username, avatar } = result;
        return { id, username, avatar };
    });
}
;
exports.userService = {
    getAllStars,
    userData
};
