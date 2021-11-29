import { generateHash, compareHash } from '../utils/bcrypt';
import UserAlreadyExists from '../errors/UserAlreadyExists';
import InvalidCredentials from '../errors/InvalidCredentials';
import { generateLoginToken } from '../utils/jwt';

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

  async login(body) {
    await body.validate();

    const foundUser = await this.authRepository.findUserByEmail(body.email);

    if (!foundUser) {
      throw new InvalidCredentials();
    }

    const doesPasswordMatch = compareHash(body.password, foundUser.password);

    if (!doesPasswordMatch) {
      throw new InvalidCredentials();
    }

    const token = generateLoginToken({
      id: foundUser._id,
      role: foundUser.role,
    });

    return {
      token,
      role: foundUser.role,
    };
  }
}

export default AuthService;
