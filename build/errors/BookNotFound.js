"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BookNotFoundException extends Error {
  constructor() {
    super();
    this.message = 'Book not found';
    this.status = 400;
  }

}

var _default = BookNotFoundException;
exports.default = _default;