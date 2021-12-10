let junkDrawer: any[] = ['cool string', 42, true];

let companies: Array<string> = ['Microsoft', 'Google', 'Amazon'];

let primeNums: Array<number> = [7, 11, 13];

let lastValue = primeNums.pop();

import Book from './Book';
import BookShelf from './BookShelf';


let book1 = new Book("Alice in Wonderland");
let book2 = new Book("Bob in Mandaniness");

let bookStore = new BookShelf();

bookStore.addBookToCatalog(book1);
bookStore.addBookToCatalog(book2);