import { Book, BookAttributes } from '../entity/models/book';


class BookRepository {
  // Create a new book
  async createBook(bookData: Omit<BookAttributes, 'id'>): Promise<Book> {
    try {
      const newBook = await Book.create(bookData);
      return newBook;
    } catch (error: any) {
      return error.message;
    }
  }

  // Get all books
  async getAllBooks(): Promise<Book[]> {
    try {
      const books = await Book.findAll();
      return books;
    } catch (error: any) {
      return error.message;
    }
  }

  // Get a book by ID
  async getBookById(bookId: number): Promise<Book | null> {
    try {
      const book = await Book.findByPk(bookId);
      return book;
    } catch (error: any) {
      return error.message;
    }
  }
  
  async getbookByTag(tagName: string): Promise<Book| null> {
    try {
      const books = await Book.findAll({
        where: { tag: tagName },
      });
  
      return books;
    } catch (error: any) {
      return error.message;
    }
  }

}

export default new BookRepository();
