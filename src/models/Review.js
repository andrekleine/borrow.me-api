import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    googleID: { type: String, required: true, maxlength: 100 },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    stars: { type: Number, default: 0, enum: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] },
    text: { type: String, maxlength: 250 },
}, {
    timestamps: true,
});

const Review = model('review', reviewSchema);

export default Review;
