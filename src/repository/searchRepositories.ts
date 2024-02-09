import { Book, BookAttributes } from '../entity/models/book';
import {Op} from "sequelize"
const searchRepository = async (pageNumber: number = 1, pageSize: number = 7, search:string) => {
  const offset = (pageNumber - 1) * pageSize;
  const searchTag= await Book.findAndCountAll({
    where: { tag:{
      [Op.regexp]: search
    } },
    offset,
    limit: pageSize,
  });

  const searchTitle= await Book.findAndCountAll({
    where: { title:{
      [Op.regexp]: search
    } },
    offset,
    limit: pageSize,
  });
  const searchWriter=await Book.findAndCountAll({
    where: { writer: {
      [Op.regexp]: search
    } },
    offset,
    limit: pageSize,
  });
  const allSearches = [...searchWriter.rows, ...searchTitle.rows, ...searchTag.rows];
  return allSearches;
};

export default searchRepository
