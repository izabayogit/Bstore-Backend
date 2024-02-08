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
    try{
      const books = await BookService.getAllBooks();
       res.status(200).json(books)
    }
    catch(error){
       res.status(500).json({error: error.message})
    }
  }

  async getBookById(req:Request, res:Response): Promise<void> {
    console.log(req.params.id,"111111111111111111111111111111111111111111111111")
    try{
      const foundBook = await BookService.getBookById( parseFloat(req.params.id));
       res.status(200).json(foundBook)
    }catch(error){
     res.status(500).json({errr: error.message})
    }
    
  }

  async getBookByTagController(req:Request, res:Response): Promise<void> {
    try{
      const foundBook = await BookService.getBookByTag(req.body.tag);
      // if(foundBook){
        res.status(200).json(foundBook)
      // }else{
      //   res.status(400).json({
      //     status:400,
      //     message: `book with ${req.body.tag} tag not found`
      //   }
      //   )
  
     
    }catch(error){
     res.status(500).json({errr: error.message})
    }
    
  }
}

export default new BookController();
