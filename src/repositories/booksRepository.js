class BooksRepository {
  constructor(Model) {
    this.Model = Model;
  }

  // Last 9 books read by friends
  async findLast9BooksReadByFriends(id) {
    const last9BooksReadByFriends = await this.Model.find({
      owner: { $ne: id },
    })
      .sort([['updatedAt', -1]])
      .limit(9);

    return last9BooksReadByFriends;
  }

  // Last 60 books read by friends
  async findLast60BooksReadByFriends(id) {
    const last60BooksReadByFriends = await this.Model.find({
      owner: { $ne: id },
    })
      .sort([['updatedAt', -1]])
      .limit(60);

    return last60BooksReadByFriends;
  }

  // Last 9 books friends will lend
  async findLast9BooksFriendsWillLend(id) {
    const last9BooksFriendsWillLend = await this.Model.find({
      owner: { $ne: id },
      lendable: true,
    })
      .sort([['updatedAt', -1]])
      .limit(9);

    return last9BooksFriendsWillLend;
  }

  // Last 60 books friends will lend
  async findLast60BooksFriendsWillLend(id) {
    const last60BooksFriendsWillLend = await this.Model.find({
      owner: { $ne: id },
      lendable: true,
    })
      .sort([['updatedAt', -1]])
      .limit(60);

    return last60BooksFriendsWillLend;
  }

  // Last 9 books I have read
  async findLast9BooksIRead(id) {
    const last9BooksIRead = await this.Model.find({
      owner: id,
      read: true,
    })
      .sort([['updatedAt', -1]])
      .limit(9);

    return last9BooksIRead;
  }

  // Last 60 books I have read
  async findLast60BooksIRead(id) {
    const last60BooksIRead = await this.Model.find({
      owner: id,
      read: true,
    })
      .sort([['updatedAt', -1]])
      .limit(60);

    return last60BooksIRead;
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
