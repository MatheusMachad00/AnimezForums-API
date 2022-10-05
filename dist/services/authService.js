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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authRepository_1 = require("../repositories/authRepository");
function signup(signupData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, email, password } = signupData;
        const SALT = 10;
        const encryptedPassword = bcrypt_1.default.hashSync(password, SALT);
        const emailExists = yield checkEmail(email);
        if (emailExists)
            throw { type: 'conflict', message: 'Email already registered.' };
        const usernameExists = yield authRepository_1.authRepository.checkUsername(username);
        if (usernameExists)
            throw { type: 'conflict', message: 'Username already registered.' };
        yield authRepository_1.authRepository.createUser(Object.assign(Object.assign({}, signupData), { password: encryptedPassword }));
    });
}
;
function login(login) {
    return __awaiter(this, void 0, void 0, function* () {
        const KEY_JWT = process.env.JWT_SECRET;
        const data = login;
        const isEmailValid = checkEmail(data.email);
        if (!isEmailValid)
            throw { type: 'conflict', message: 'Email already registered.' };
        const { id, username, email, avatar } = yield getUserOrFail(data);
        const token = jsonwebtoken_1.default.sign({ id, username, email, avatar }, String(KEY_JWT));
        return { token, id, username, avatar };
    });
}
;
function checkEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const emailExists = yield authRepository_1.authRepository.checkEmail(email);
        return emailExists;
    });
}
;
function getUserOrFail(login) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield authRepository_1.authRepository.checkEmail(login.email);
        if (!user)
            throw { type: 'unauthorized', message: 'Wrong email or password' };
        const isPasswordValid = bcrypt_1.default.compareSync(login.password, user.password);
        if (!isPasswordValid)
            throw { type: 'unauthorized', message: 'Wrong email or password' };
        return user;
    });
}
;
exports.authService = {
    signup,
    login
};
