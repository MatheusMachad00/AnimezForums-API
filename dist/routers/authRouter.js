"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateSchema_1 = require("../middlewares/validateSchema");
const authSchema_1 = require("../schemas/authSchema");
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post("/login", (0, validateSchema_1.validateSchemaMiddleware)(authSchema_1.loginSchema), authController_1.authController.login);
router.post("/signup", (0, validateSchema_1.validateSchemaMiddleware)(authSchema_1.signupSchema), authController_1.authController.signup);
exports.default = router;
