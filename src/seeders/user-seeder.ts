// user-seeder.ts
import { QueryInterface } from 'sequelize';
import { User } from '../entity/models/user';

const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date(),
    },
    {
      name: 'Alice Smith',
      email: 'alice@example.com',
      createdAt: new Date(),
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      createdAt: new Date(),
    },
    {
      name: 'Emma Davis',
      email: 'emma@example.com',
      createdAt: new Date(),
    },
    {
      name: 'Chris Wilson',
      email: 'chris@example.com',
      createdAt: new Date(),
    },
    // Add more users as needed
  ]);
};

const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete('Users',  {});
};

export { up, down };  // Use named exports
