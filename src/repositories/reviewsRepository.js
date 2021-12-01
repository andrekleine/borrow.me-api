class ReviewsRepository {
  constructor(Model) {
    this.Model = Model;
  }

  // Find all reviews by googleId
  async findReviewsByGoogleId(googleId) {
    const review = await this.Model.find({
      googleID: googleId,
    });

    return review;
  }

  // Create new review in DB
  async create(reviewData) {
    const newReview = await this.Model.create(reviewData);

    return newReview;
  }

  // Edit review by review id
  async editReviewByReviewId(reviewId, projectData) {
    const editedReview = await this.Model.findByIdAndUpdate(reviewId, projectData, {
      new: true,
    });

    return editedReview;
  }

  // Delete one review by id
  async deleteOneById(reviewId) {
    await this.Model.findByIdAndDelete(reviewId);
  }
}
export default ReviewsRepository;
