import Book from "./Book";

function checkOut<T>(item: T): T {
  let availableItem: T = item;
  if (availableItem) {

  }
  return availableItem;
}

checkOut<Book>(new Book("book1"));