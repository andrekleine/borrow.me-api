import { generateHash } from '../utils/bcrypt';
import UserAlreadyExists from '../errors/UserAlreadyExists';

class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async register(body) {
    await body.validate();

    const foundUser = await this.authRepository.findUserByEmail(body.email);

    if (foundUser) {
      throw new UserAlreadyExists();
    }

    const encryptedPassword = generateHash(body.password, 10);

    const newUser = { ...body, password: encryptedPassword };

    const savedUser = await this.authRepository.saveUser(newUser);

    return {
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    };
  }
}

export default AuthService;
