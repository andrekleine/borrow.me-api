class BooksService {
  constructor(booksRepository) {
    this.booksRepository = booksRepository;
  }

  // Last 15 books ready by friends
  async findLastBooksReadByFriends(id) {
    const lastBooksReadByFriends =
      await this.booksRepository.findLastBooksReadByFriends(id);

    return lastBooksReadByFriends;
  }

  // Last 15 books friends will lend
  async findLastBooksFriendsWillLend(id) {
    const lastBooksFriendsWillLend =
      await this.booksRepository.findLastBooksFriendsWillLend(id);

    return lastBooksFriendsWillLend;
  }

  // Last 9 books I have read
  async findLastBooksIRead(id) {
    const lastBooksIRead = await this.booksRepository.findLastBooksIRead(id);

    return lastBooksIRead;
  }

  // Find one book by bookId
  async findOneBookByBookId(bookId) {
    const book = await this.booksRepository.findOneBookByBookId(bookId);

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

  // Delete one book by id
  async deleteOne(id) {
    await this.booksRepository.deleteOneById(id);
  }
}

export default BooksService;
