import UserService from '../service/userServices';
import { UserAttributes } from '../entity/models/user';
import { Request, Response } from 'express';

class UserController {
  async createUser(req:Request, res:Response): Promise<Response> {
    try{
      const user = await UserService.getUserEmail(req.body.email)
      if(!user){
        const newUser= await UserService.createUser(req.body);
        return res.status(201).json({
         data: newUser,
         message:"signup is successful"
       });
      }else{
        return res.status(422).json({
          status: 422,
          message:"User already exists"
        });
      }
     
    }catch(error: any){
      return  res.status(422).json({error: error.message})
    }
  
  }



  async login(req:Request, res:Response): Promise<Response> {
    try{
      const user = await UserService.getUserEmail(req.body.email)
      if(user){
         return res.status(200).json({
          status:200,
          data: user,
          message:"Login is successful"
        })
      }
    } catch(error){
      return res.status(400).json({
        status:400,
        message: "Login fail, Please signup first"
      })
    }
  
  }
}

export default new UserController();
