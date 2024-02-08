"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = __importDefault(require("../controller/bookController"));
const router = express_1.default.Router();
router.get('/books', bookController_1.default.getAllBooks);
router.get('/book/:id', bookController_1.default.getBookById);
router.post('/book/tag', bookController_1.default.getBookByTagController);
router.post('/book', bookController_1.default.createBook);
exports.default = router;
