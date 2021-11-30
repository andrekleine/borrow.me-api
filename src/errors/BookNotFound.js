class BookNotFoundException extends Error {
  constructor() {
    super();
    this.message = 'Book not found';
    this.status = 400;
  }
}
export default BookNotFoundException;
