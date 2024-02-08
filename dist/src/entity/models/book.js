"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBookModel = exports.Book = void 0;
// book.model.ts
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
const initBookModel = (sequelize) => {
    Book.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        writer: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        coverImage: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        tag: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        authorId: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: user_1.User,
                key: 'id',
            },
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'Books',
    });
};
exports.initBookModel = initBookModel;
