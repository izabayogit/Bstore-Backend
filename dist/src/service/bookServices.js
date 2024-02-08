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
const bookRepositories_1 = __importDefault(require("../repository/bookRepositories"));
class BookService {
    // Create a new book
    createBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = yield bookRepositories_1.default.createBook(bookData);
                return newBook;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Get all books
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield bookRepositories_1.default.getAllBooks();
                return books;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Get a book by ID
    getBookById(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield bookRepositories_1.default.getBookById(bookId);
                return book;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    getBookByTag(taag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield bookRepositories_1.default.getbookByTag(taag);
                return book;
            }
            catch (error) {
                return error.message;
            }
        });
    }
}
exports.default = new BookService();
