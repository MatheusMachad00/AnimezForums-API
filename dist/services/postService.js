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
exports.postService = void 0;
const postRepository_1 = require("../repositories/postRepository");
const animeRepository_1 = require("../repositories/animeRepository");
function createPost(post, animeName) {
    return __awaiter(this, void 0, void 0, function* () {
        const animeId = yield checkAnimeAndCreate(animeName);
        const postData = Object.assign(Object.assign({}, post), { animeId: animeId.id });
        console.log('eu sou createpost', animeName, postData);
        yield postRepository_1.postRepository.createPost(postData);
    });
}
;
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postRepository_1.postRepository.getAllPosts();
        return result;
    });
}
;
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postRepository_1.postRepository.findById(id);
        if (!result)
            throw { type: 'not_found', message: 'Post not found.' };
        return result;
    });
}
;
function giveStar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield findByIdOrFail(id);
        yield postRepository_1.postRepository.giveStar(id);
    });
}
;
function getPostsByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postRepository_1.postRepository.findPostsByUserId(userId);
        if (!result)
            throw { type: 'not_found', message: 'This user has no posts.' };
        return result;
    });
}
;
function findByIdOrFail(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postRepository_1.postRepository.findById(id);
        if (!result)
            throw { type: 'not_found', message: 'Post not found.' };
        return result;
    });
}
;
/* async function getPostByAnimeId(id: number){
  const result = await postRepository.findPostsByAnimeId(id);
  if (!result) throw { type: 'not_found', message: 'There are no posts about this anime.' };
  return result;
}; */
function checkAnimeAndCreate(animeName) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkAnime = yield animeRepository_1.animeRepository.findByName({ name: animeName });
        if (!checkAnime) {
            yield animeRepository_1.animeRepository.createAnime({ name: animeName });
            return yield animeRepository_1.animeRepository.findByName({ name: animeName });
        }
        ;
        return checkAnime;
    });
}
;
exports.postService = {
    createPost,
    giveStar,
    getPostsByUserId,
    getAllPosts,
    getPostById,
};
