class BooksService {
  constructor(booksRepository) {
    this.booksRepository = booksRepository;
  }

  // Last 9 books read by friends
  async findLast9BooksReadByFriends(id) {
    const last9BooksReadByFriends =
      await this.booksRepository.findLast9BooksReadByFriends(id);

    return last9BooksReadByFriends;
  }

  // Last 60 books read by friends
  async findLast60BooksReadByFriends(id) {
    const last60BooksReadByFriends =
      await this.booksRepository.findLast60BooksReadByFriends(id);

    return last60BooksReadByFriends;
  }

  // Last 9 books friends will lend
  async findLast9BooksFriendsWillLend(id) {
    const last9BooksFriendsWillLend =
      await this.booksRepository.findLast9BooksFriendsWillLend(id);

    return last9BooksFriendsWillLend;
  }

  // Last 60 books friends will lend
  async findLast60BooksFriendsWillLend(id) {
    const last60BooksFriendsWillLend =
      await this.booksRepository.findLast60BooksFriendsWillLend(id);

    return last60BooksFriendsWillLend;
  }

  // Last 9 books I have read
  async findLast9BooksIRead(id) {
    const last9BooksIRead = await this.booksRepository.findLast9BooksIRead(id);

    return last9BooksIRead;
  }

  // Last 60 books I have read
  async findLast60BooksIRead(id) {
    const last60BooksIRead = await this.booksRepository.findLast60BooksIRead(
      id
    );

    return last60BooksIRead;
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
