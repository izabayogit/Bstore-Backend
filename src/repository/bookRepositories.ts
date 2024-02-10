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
  async getAllBooks(pageNumber: number = 1, pageSize: number = 7, tagName:string): Promise<  BookAttributes[] > {
    try {
      const offset = (pageNumber - 1) * pageSize;
      // Find all books with pagination
      if(tagName){
        const result = await Book.findAndCountAll({
          where: { tag: tagName },
          offset,
          limit: pageSize,
        });
    
        const books = result.rows;
        if(books){
          return books;
        }

      }else{
        const result = await Book.findAndCountAll({
          offset,
          limit: pageSize,
        });
    
        const books = result.rows;
        if(books){
          return  books;
        }
     
      }
      
    } catch (error: any) {
      return  error.message ;
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
}

export default new BookRepository();
