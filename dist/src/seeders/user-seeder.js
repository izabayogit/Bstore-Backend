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
    yield queryInterface.bulkInsert('Users', [
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
});
exports.up = up;
const down = (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
    yield queryInterface.bulkDelete('Users', {});
});
exports.down = down;
