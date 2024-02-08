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
const user_1 = require("../entity/models/user");
class UserRepository {
    // Create a new user
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield user_1.User.create(userData);
                return newUser;
            }
            catch (error) {
                throw new Error('Error creating a new user');
            }
        });
    }
    // Get all users
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_1.User.findAll();
                return users;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Get a user by ID
    getUserByEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.User.findOne({ where: { email: userEmail } });
                return user;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Update a user by ID
    updateUser(userId, updatedUserData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.User.findByPk(userId);
                if (user) {
                    yield user.update(updatedUserData);
                    return user;
                }
                return null;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Delete a user by ID
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.User.findByPk(userId);
                if (user) {
                    yield user.destroy();
                }
            }
            catch (error) {
                return error.message;
            }
        });
    }
}
exports.default = new UserRepository();
