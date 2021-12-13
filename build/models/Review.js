"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const reviewSchema = new _mongoose.Schema({
  googleID: {
    type: String,
    maxlength: 100
  },
  owner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  stars: {
    type: Number,
    default: 0,
    enum: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  },
  text: {
    type: String,
    maxlength: 500
  }
}, {
  timestamps: true
});
const Review = (0, _mongoose.model)('review', reviewSchema);
var _default = Review;
exports.default = _default;