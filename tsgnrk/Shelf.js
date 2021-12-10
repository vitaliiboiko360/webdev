"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shelf = /** @class */ (function () {
    function Shelf() {
        this._items = [];
    }
    Shelf.prototype.addItemToCatalog = function (newItem) {
        this._items.push(newItem);
    };
    Shelf.prototype.removeItemFromCatalog = function (oldItem) {
        var indexToRemove = this._items.indexOf(oldItem);
        if (indexToRemove !== -1) {
            this._items.splice(indexToRemove);
        }
    };
    return Shelf;
}());
exports.default = Shelf;
