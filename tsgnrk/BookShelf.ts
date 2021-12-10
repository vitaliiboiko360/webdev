import Book from "./Book"

export default class BookShelf {
  _books: Book[] = [];

  addBookToCatalog(newBook: Book) {
    this._books.push(newBook);
  }

  removeBookFromCatalog(oldBook: Book) {
    let indexToRemove = this._books.indexOf(oldBook);
    if (indexToRemove !== -1) {
      this._books.splice(indexToRemove);
    }
  }
}