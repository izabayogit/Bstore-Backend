// user.model.ts
import {  Model, Sequelize,DataTypes  } from 'sequelize';

export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id?: number;
  public name!: string;
  public email!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  static create: any;
  static findAll: any;
  static findByPk: any;
  static findOne: any;
}

const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    },
    {
      sequelize,
      tableName: 'Users',
    }
  );
};

export { User, initUserModel };
