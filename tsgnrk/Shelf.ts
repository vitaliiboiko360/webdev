export default class Shelf<T> {

  _items: T[] = [];

  addItemToCatalog(newItem: T) {
    this._items.push(newItem);
  }

  removeItemFromCatalog(oldItem: T) {
    let indexToRemove = this._items.indexOf(oldItem);
    if (indexToRemove !== -1) {
      this._items.splice(indexToRemove);
    }
  }
}