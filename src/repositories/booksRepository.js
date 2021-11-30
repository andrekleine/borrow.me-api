class BooksRepository {
  constructor(Model) {
    this.Model = Model;
  }

  // Last 15 books ready by friends
  async findLastBooksReadByFriends(id) {
    const lastBooksReadByFriends = await this.Model.find({
      owner: { $ne: id },
    })
      .sort([['updatedAt', -1]])
      .limit(15);

    return lastBooksReadByFriends;
  }

  // Last 15 books friends will lend
  async findLastBooksFriendsWillLend(id) {
    const lastBooksFriendsWillLend = await this.Model.find({
      owner: { $ne: id },
      lendable: true,
    })
      .sort([['updatedAt', -1]])
      .limit(15);

    return lastBooksFriendsWillLend;
  }

  // Last 9 books I have read
  async findLastBooksIRead(id) {
    const lastBooksIRead = await this.Model.find({
      owner: id,
      read: true,
    })
      .sort([['updatedAt', -1]])
      .limit(9);

    return lastBooksIRead;
  }

  // Find one book by BookId
  async findOneBookByBookId(bookId) {
    const book = await this.Model.findOne({
      _id: bookId,
    });

    return book;
  }

  // Create new book in DB
  async create(bookData) {
    const newBook = await this.Model.create(bookData);

    return newBook;
  }

  // Delete one book by id
  async deleteOneById(id) {
    await this.Model.findByIdAndDelete(id);
  }
}
export default BooksRepository;
