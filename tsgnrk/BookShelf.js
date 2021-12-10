"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookShelf = /** @class */ (function () {
    function BookShelf() {
        this._books = [];
    }
    BookShelf.prototype.addBookToCatalog = function (newBook) {
        this._books.push(newBook);
    };
    BookShelf.prototype.removeBookFromCatalog = function (oldBook) {
        var indexToRemove = this._books.indexOf(oldBook);
        if (indexToRemove !== -1) {
            this._books.splice(indexToRemove);
        }
    };
    return BookShelf;
}());
exports.default = BookShelf;
