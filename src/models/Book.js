import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 150 },
    authors: [{ type: String, required: true, minlength: 3, maxlength: 150 }],
    description: { type: String, maxlength: 2000 },
    imgLink: { type: String, maxlength: 2000 },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    googleID: { type: String, required: true, maxlength: 100 },
    read: { type: Boolean, default: true },
    lendable: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Book = model('book', bookSchema);

export default Book;
