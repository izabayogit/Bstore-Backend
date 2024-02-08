"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
    yield queryInterface.bulkInsert('Books', [
        {
            writer: 'John Doe',
            title: 'Milk and Honey',
            coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 19.99,
            tag: 'Fiction',
            createdAt: new Date(),
            authorId: 1, // Assuming John Doe has an ID of 1
        },
        {
            writer: 'Alice Smith',
            title: "Don't just follow your dreams chase them",
            coverImage: 'https://st2.depositphotos.com/1011352/5361/i/450/depositphotos_53614371-stock-photo-inspirational-quote-with-stack-of.jpg',
            price: 24.99,
            tag: 'Non-Fiction',
            createdAt: new Date(),
            authorId: 2, // Assuming Alice Smith has an ID of 2
        },
        {
            writer: 'Bob Johnson',
            title: 'Decent People',
            coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653950983i/58532129.jpg",
            price: 14.99,
            tag: 'Science',
            createdAt: new Date(),
            authorId: 3, // Assuming Bob Johnson has an ID of 3
        },
        {
            writer: 'Emma Davis',
            title: 'Sun Keep Rising',
            coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656310241i/61356489.jpg",
            price: 29.99,
            tag: 'Essay',
            createdAt: new Date(),
            authorId: 4, // Assuming Emma Davis has an ID of 4
        },
        {
            writer: 'Chris Wilson',
            title: 'River Sing Me Home',
            coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675174045i/61111298.jpg",
            price: 22.99,
            tag: 'Fiction',
            createdAt: new Date(),
            authorId: 5, // Assuming Chris Wilson has an ID of 5
        },
        // Add more books as needed
    ]);
});
exports.up = up;
const down = (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
    yield queryInterface.bulkDelete('Books', {});
});
exports.down = down;
