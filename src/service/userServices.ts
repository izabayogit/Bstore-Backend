import UserRepository from '../repository/userRepositories';
import { UserAttributes } from '../entity/models/user';

class UserService {
  async createUser(userData: Omit<UserAttributes, 'id'>): Promise<UserAttributes> {
    try {
      return UserRepository.createUser(userData);
    } catch (error) {
      throw new Error('Error creating a new user');
    }
  }

  async getAllUsers(): Promise<UserAttributes[]> {
    try {
      return UserRepository.getAllUsers();
    }  catch (error: any) {
      return error.message;
    }
  }

  async getUserEmail(userEmail: string): Promise<UserAttributes | null> {
    try {
      return UserRepository.getUserByEmail(userEmail);
    }  catch (error: any) {
      return error.message;
    }
  }

}

export default new UserService();
