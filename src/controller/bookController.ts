import BookService from '../service/bookServices';
import { BookAttributes } from '../entity/models/book';
import { Request, Response } from 'express';

class BookController {
  async createBook(req:Request, res:Response): Promise<void> {
    try{
      const newBook = BookService.createBook(req.body);
       res.status(201).json(newBook)
    }catch(error){
       res.status(500).json({ error: error.message });
    }
    
  }

  async getAllBooks(req:Request, res:Response): Promise<void> { 
    const pageNumber: number = parseInt( req.query.pageNumber as string);
    const pageSize: number = parseInt( req.query.pageSize as string);
    const tag: string =  req.query.tag as string;
    try{
      const books = await BookService.getAllBooks(pageNumber, pageSize, tag);
       res.status(200).json(books)
    }
    catch(error){
       res.status(500).json({error: error.message})
    }
  }

  async getBookById(req:Request, res:Response): Promise<void> {
    try{
      const foundBook = await BookService.getBookById( parseFloat(req.params.id));
       res.status(200).json(foundBook)
    }catch(error){
     res.status(500).json({errr: error.message})
    }
    
  }
}

export default new BookController();
