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
const bookServices_1 = __importDefault(require("../service/bookServices"));
class BookController {
    createBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = bookServices_1.default.createBook(req.body);
                res.status(201).json(newBook);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getAllBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield bookServices_1.default.getAllBooks();
                res.status(200).json(books);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id, "111111111111111111111111111111111111111111111111");
            try {
                const foundBook = yield bookServices_1.default.getBookById(parseFloat(req.params.id));
                res.status(200).json(foundBook);
            }
            catch (error) {
                res.status(500).json({ errr: error.message });
            }
        });
    }
    getBookByTagController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundBook = yield bookServices_1.default.getBookByTag(req.body.tag);
                // if(foundBook){
                res.status(200).json(foundBook);
                // }else{
                //   res.status(400).json({
                //     status:400,
                //     message: `book with ${req.body.tag} tag not found`
                //   }
                //   )
            }
            catch (error) {
                res.status(500).json({ errr: error.message });
            }
        });
    }
}
exports.default = new BookController();
