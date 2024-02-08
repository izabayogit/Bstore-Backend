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
const book_1 = require("../entity/models/book");
class BookRepository {
    // Create a new book
    createBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = yield book_1.Book.create(bookData);
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
                const books = yield book_1.Book.findAll();
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
                const book = yield book_1.Book.findByPk(bookId);
                return book;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    getbookByTag(tagName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield book_1.Book.findAll({
                    where: { tag: tagName },
                });
                return books;
            }
            catch (error) {
                return error.message;
            }
        });
    }
}
exports.default = new BookRepository();
