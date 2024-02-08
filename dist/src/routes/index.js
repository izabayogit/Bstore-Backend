"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRoutes_1 = __importDefault(require("./usersRoutes"));
const bookRoutes_1 = __importDefault(require("./bookRoutes"));
const router = (0, express_1.default)();
router.use(usersRoutes_1.default);
router.use(bookRoutes_1.default);
exports.default = router;
