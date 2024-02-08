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
const userRepositories_1 = __importDefault(require("../repository/userRepositories"));
class UserService {
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return userRepositories_1.default.createUser(userData);
            }
            catch (error) {
                throw new Error('Error creating a new user');
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return userRepositories_1.default.getAllUsers();
            }
            catch (error) {
                return error.message;
            }
        });
    }
    getUserEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return userRepositories_1.default.getUserByEmail(userEmail);
            }
            catch (error) {
                return error.message;
            }
        });
    }
}
exports.default = new UserService();
