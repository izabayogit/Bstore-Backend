import BookRepository from '../repository/bookRepositories';
import { BookAttributes } from '../entity/models/book';

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
  async getAllBooks(): Promise<BookAttributes[]> {
    try {
      const books = await BookRepository.getAllBooks();
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

  async getBookByTag(taag: string): Promise<BookAttributes | null> {
    try {
    const book = await BookRepository.getbookByTag(taag);
    return book;
    }  catch (error: any) {
      return error.message;
    }
  }
}

export default new BookService();
