import dotenv from 'dotenv';

dotenv.config();

const generateCredentials = (database, host) => ({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database,
  host,
  dialect: 'postgres',
  logging: false
});

const development = generateCredentials(process.env.DATABASE, process.env.HOST);


export default {
  development,

};

export
{
  development,

};
