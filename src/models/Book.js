import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 150 },
    authors: [{ type: String, required: true, minlength: 3, maxlength: 150 }],
    description: { type: String, maxlength: 1000 },
    imageLink: { type: String, maxlength: 150 },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    googleID: { type: String, required: true, maxlength: 100 },
    read: { type: Boolean, default: false },
    lendable: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Book = model('book', bookSchema);

export default Book;
