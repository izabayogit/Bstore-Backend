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

  async getAllBooks(req:Request, res:Response): Promise<Response> { 
    const pageNumber: number = parseInt( req.query.pageNumber as string);
    const pageSize: number = parseInt( req.query.pageSize as string);
    const tag: string =  req.query.tag as string;
    const search: string = req.query.search as string;
    try{
      if(search){
        const books= await BookService.searchAllBooks(pageNumber, pageSize, search)
        if(!books.length){
           return res.status(404).json({
            status: 404,
            error: 'No Results Found'
          });
        }
        res.status(200).json(books)
      }else{
        const books = await BookService.getAllBooks(pageNumber, pageSize, tag);
        if(!books.length){
          return res.status(404).json({
           status: 404,
           error: 'No Results Found'
         });
       }
        return res.status(200).json(books)
      }
    
    }
    catch(error){
       res.status(500).json({error: error.message})
    }
  }

  async getBookById(req:Request, res:Response): Promise<Response> {
    try{
      const foundBook = await BookService.getBookById( parseFloat(req.params.id));
       return res.status(200).json(foundBook)
    }catch(error){
     return res.status(500).json({errr: error.message})
    }
    
  }
}

export default new BookController();
