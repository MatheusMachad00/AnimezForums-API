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
exports.userController = void 0;
const userService_1 = require("../services/userService");
function userProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const userData = yield userService_1.userService.userData(Number(id));
        const totalStars = yield userService_1.userService.getAllStars(Number(id));
        res.send(Object.assign(Object.assign({}, userData), { totalStars: totalStars })).status(200);
    });
}
;
exports.userController = {
    userProfile,
};
