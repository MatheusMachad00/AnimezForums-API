"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateToken_1 = require("../middlewares/validateToken");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.get("/userProfile/:id", validateToken_1.validateToken, userController_1.userController.userProfile);
exports.default = router;
