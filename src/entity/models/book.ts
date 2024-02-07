// book.model.ts
import {  Model, Sequelize, DataTypes } from 'sequelize';
import { User } from './user';

// import {  } from 'sequelize/types';


export interface BookAttributes {
  id?: number;
  writer: string;
  title: string;
  coverImage: string;
  price: number;
  tag: string;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: number;
}

class Book extends Model<BookAttributes> implements BookAttributes {
  public id?: number;
  public writer!: string;
  public title!: string;
  public coverImage!: string;
  public price!: number;
  public tag!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public authorId?: number;
  static create: any;
  static findAll: any;
  static findByPk: any;
}

const initBookModel = (sequelize: Sequelize) => {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      writer: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coverImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      tag: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      authorId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Books',
    }
  );
};

export { Book, initBookModel };
