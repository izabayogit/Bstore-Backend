import UserService from '../service/userServices';
import { UserAttributes } from '../entity/models/user';
import { Request, Response } from 'express';

class UserController {
  async createUser(req:Request, res:Response): Promise<void> {
    try{
      const user = await UserService.getUserEmail(req.body.email)
      if(!user){
        const newUser= await UserService.createUser(req.body);
        res.status(201).json({
         data: newUser,
         message:"signup is successful"
       });
      }else{
        res.status(409).json({
          status: 409,
          message:"User already exists"
        });
      }
     
    }catch(error: any){
       res.status(500).json({error: error.message})
    }
  
  }



  async login(req:Request, res:Response): Promise<void> {
    try{
      const user = await UserService.getUserEmail(req.body.email)
      if(user){
         res.status(200).json({
          status:200,
          data: user,
          message:"Login is successful"
        })
      }
    } catch(error){
      res.status(400).json({
        status:400,
        message: "Login fail, Please signup first"
      })
    }
  
  }
}

export default new UserController();
