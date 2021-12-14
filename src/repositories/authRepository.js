class AuthRepository {
  constructor(Model) {
    this.Model = Model;
  }

  async findUserByEmail(email) {
    const foundUser = await this.Model.findOne({ email });
    return foundUser;
  }

  async findUserById(_id) {
    const foundUser = await this.Model.find({ _id });
    return (foundUser);
  }

  async saveUser(newUser) {
      const savedUser = await this.Model.create(newUser);
      return savedUser;
  }
}

export default AuthRepository;
