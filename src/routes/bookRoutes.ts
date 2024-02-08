import express from 'express';
import bookController from '../controller/bookController';

const router = express.Router();
router.get('/books', bookController.getAllBooks);
router.get('/book/:id', bookController.getBookById);
router.post('/book', bookController.createBook)


export default router;
