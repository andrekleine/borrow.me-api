class BooksService {
  constructor(booksRepository) {
    this.booksRepository = booksRepository;
  }

  // Last books read by friends
  async findLastBooksReadByFriends(id, bookAmount) {
    const lastBooksReadByFriends =
      await this.booksRepository.findLastBooksReadByFriends(id, bookAmount);

    return lastBooksReadByFriends;
  }

  // Last books friends will lend
  async findLastBooksFriendsWillLend(id, bookAmount) {
    const lastBooksFriendsWillLend =
      await this.booksRepository.findLastBooksFriendsWillLend(id, bookAmount);

    return lastBooksFriendsWillLend;
  }

  // Last books I have read
  async findLastBooksIRead(id, bookAmount) {
    const lastBooksIRead = await this.booksRepository.findLastBooksIRead(
      id,
      bookAmount
    );

    return lastBooksIRead;
  }

  // Find people who are gonna lend a certain book by GoogleId
  async findWhoLendsBookByGoogleId(googleId) {
    const peopleWhoLend = await this.booksRepository.findWhoLendsBookByGoogleId(
      googleId
    );

    return peopleWhoLend;
  }

  // Find one book by bookId
  async findOneBookByGoogleId(googleId, id) {
    const book = await this.booksRepository.findOneBookByGoogleId(googleId, id);

    return book;
  }

  // Create new book in DB
  async create(body, id) {
    await body.validate();

    const bookData = {
      title: body.title,
      authors: body.authors,
      description: body.description,
      imgLink: body.imgLink,
      googleID: body.googleID,
      owner: id,
    };

    const newBook = await this.booksRepository.create(bookData);

    return newBook;
  }

  // Edit one book by book id
  async editBookByBookId(bookId, body) {
    const bookData = {
      lendable: body.lendable,
    };

    const editedBook = await this.booksRepository.editBookByBookId(
      bookId,
      bookData
    );

    return editedBook;
  }

  // Delete one book by id
  async deleteOne(id) {
    await this.booksRepository.deleteOneById(id);
  }
}

export default BooksService;
