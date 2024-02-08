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
const userServices_1 = __importDefault(require("../service/userServices"));
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userServices_1.default.getUserEmail(req.body.email);
                if (!user) {
                    const newUser = yield userServices_1.default.createUser(req.body);
                    res.status(201).json({
                        data: newUser,
                        message: "signup is successful"
                    });
                }
                else {
                    res.status(409).json({
                        status: 409,
                        message: "User already exists"
                    });
                }
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userServices_1.default.getUserEmail(req.body.email);
                if (user) {
                    res.status(200).json({
                        status: 200,
                        data: user,
                        message: "Login is successful"
                    });
                }
            }
            catch (error) {
                res.status(400).json({
                    status: 400,
                    message: "Login fail, Please signup first"
                });
            }
        });
    }
}
exports.default = new UserController();
