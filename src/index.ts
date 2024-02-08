import * as http from 'http'
import express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import  * as  dotenv from 'dotenv'
import  { sequelize } from './entity/models/index';
import router from "./routes/index";
import cors from 'cors'; 

dotenv.config()
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",router);
app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World'
  });
});
const server = http.createServer(app);
// const eraseDatabaseOnSync = true;
sequelize.sync(
  // { force: eraseDatabaseOnSync }
  ).then(() => {
server.listen(process.env.PORT, () => {
  console.log(`API started at http://localhost:${process.env.PORT}`);
}) });;
