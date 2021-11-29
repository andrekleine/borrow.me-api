class NotAuthorized extends Error {
  constructor(message) {
    super();

    this.message = message;
    this.status = 401;
  }
}

export default NotAuthorized;