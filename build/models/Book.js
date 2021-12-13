"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const bookSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 500
  },
  authors: [{
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150
  }],
  description: {
    type: String,
    maxlength: 5000
  },
  imgLink: {
    type: String,
    maxlength: 2000
  },
  owner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  googleID: {
    type: String,
    required: true,
    maxlength: 100
  },
  read: {
    type: Boolean,
    default: true
  },
  lendable: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});
const Book = (0, _mongoose.model)('book', bookSchema);
var _default = Book;
exports.default = _default;