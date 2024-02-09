import BookRepository from '../repository/bookRepositories';
import { BookAttributes } from '../entity/models/book';
import searchRepository from '../repository/searchRepositories';

class BookService {
  // Create a new book
  async createBook(bookData: Omit<BookAttributes, 'id'>): Promise<BookAttributes> {
    try {
      const newBook = await BookRepository.createBook(bookData);
      return newBook;
    }  catch (error: any) {
      return error.message;
    }
  }

  // Get all books
  async getAllBooks(pageNumber,pageSize,tagName): Promise<BookAttributes[]> {
    try {
      const books = await BookRepository.getAllBooks(pageNumber,pageSize, tagName);
      return books;
    }  catch (error: any) {
      return error.message;
    }
  }

  async searchAllBooks(pageNumber, pageSize, search): Promise<BookAttributes[]> {
    try {
      const books = await searchRepository(pageNumber,pageSize, search);
      return books;
    }  catch (error: any) {
      return error.message;
    }
  }

  // Get a book by ID
  async getBookById(bookId: number): Promise<BookAttributes | null> {
    try {
      const book = await BookRepository.getBookById(bookId);
      return book;
    }  catch (error: any) {
      return error.message;
    }
  }
}

export default new BookService();
