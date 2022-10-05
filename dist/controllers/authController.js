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
exports.authController = void 0;
const authService_1 = require("../services/authService");
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const signupData = req.body;
        yield authService_1.authService.signup(signupData);
        res.sendStatus(201);
    });
}
;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = req.body;
        const result = yield authService_1.authService.login(userData);
        res.send(result).status(200);
    });
}
;
exports.authController = {
    signup,
    login
};
