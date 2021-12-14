class BooksRepository {
  constructor(Model) {
    this.Model = Model;
  }

  // Last books read by friends
  async findLastBooksReadByFriends(id, bookAmount) {
    const lastBooksReadByFriends = await this.Model.find({
      owner: { $ne: id },
    })
      .sort([['updatedAt', -1]])
      .limit(bookAmount);

    return lastBooksReadByFriends;
  }  

  // Last books friends will lend
  async findLastBooksFriendsWillLend(id, bookAmount) {
    const lastBooksFriendsWillLend = await this.Model.find({
      owner: { $ne: id },
      lendable: true,
    })
      .sort([['updatedAt', -1]])
      .limit(bookAmount);

    return lastBooksFriendsWillLend;
  }  

  // Last books I have read
  async findLastBooksIRead(id, bookAmount) {
    const lastBooksIRead = await this.Model.find({
      owner: id,
      read: true,
    })
      .sort([['updatedAt', -1]])
      .limit(bookAmount);

    return lastBooksIRead;
  }

  // Find people who are gonna lend a certain book by GoogleId
  async findWhoLendsBookByGoogleId(googleId) {
    const peopleWhoLend = await this.Model.find({
      googleID: googleId,
      lendable: true,
    });

    return peopleWhoLend;
  }

  // Find one book by GoogleId
  async findOneBookByGoogleId(googleId, id) {
    const book = await this.Model.findOne({
      googleID: googleId,
      owner: id
    });

    return book;
  }

  // Create new book in DB
  async create(bookData) {
    const newBook = await this.Model.create(bookData);

    return newBook;
  }

  // Edit one book by book id
  async editBookByBookId(bookId, bookData) {
    const editedBook = await this.Model.findByIdAndUpdate(bookId, bookData, {
      new: true,
    });

    return editedBook;
  }

  // Delete one book by id
  async deleteOneById(id) {
    await this.Model.findByIdAndDelete(id);
  }
}
export default BooksRepository;
