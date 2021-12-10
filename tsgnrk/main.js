"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var junkDrawer = ['cool string', 42, true];
var companies = ['Microsoft', 'Google', 'Amazon'];
var primeNums = [7, 11, 13];
var lastValue = primeNums.pop();
var Book_1 = __importDefault(require("./Book"));
var BookShelf_1 = __importDefault(require("./BookShelf"));
var book1 = new Book_1.default("Alice in Wonderland");
var book2 = new Book_1.default("Bob in Mandaniness");
var bookStore = new BookShelf_1.default();
bookStore.addBookToCatalog(book1);
bookStore.addBookToCatalog(book2);
