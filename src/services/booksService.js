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
    const lastBooksIRead = await this.booksRepository.findLastBooksIRead(id, bookAmount);

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
