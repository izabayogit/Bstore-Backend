import { User, UserAttributes } from '../entity/models/user';

class UserRepository {
  // Create a new user
  async createUser(userData: Omit<UserAttributes, 'id'>): Promise<UserAttributes> {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error('Error creating a new user');
    }
  }

  // Get all users
  async getAllUsers(): Promise<UserAttributes[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (error: any) {
      return error.message;
    }
  }

  // Get a user by ID
  async getUserByEmail(userEmail: string): Promise<UserAttributes | null> {
    try {
      const user = await User.findOne({ where: { email: userEmail } });
      return user;
    } catch (error: any) {
      return error.message;
    }
  }

  // Update a user by ID
  async updateUser(userId: number, updatedUserData: Partial<UserAttributes>): Promise<UserAttributes | null> {
    try {
      const user = await User.findByPk(userId);
      if (user) {
        await user.update(updatedUserData);
        return user;
      }
      return null;
    } catch (error: any) {
      return error.message;
    }
  }

  // Delete a user by ID
  async deleteUser(userId: number): Promise<void> {
    try {
      const user = await User.findByPk(userId);
      if (user) {
        await user.destroy();
      }
    }catch (error: any) {
      return error.message;
    }
  }
}

export default new UserRepository();
