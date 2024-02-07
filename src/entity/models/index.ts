// models.ts
import { Sequelize } from 'sequelize';
import { initUserModel } from './user';
import { initBookModel } from './book';
import * as  dotenv from "dotenv"
dotenv.config()

const sequelize = new Sequelize({
  // Your Sequelize configuration here
  database: process.env.DATABASE,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.HOST,
  port:56424,
  dialect: 'postgres', // or your preferred database dialect
});

// Initialize models
initUserModel(sequelize);
initBookModel(sequelize);

export { sequelize };
