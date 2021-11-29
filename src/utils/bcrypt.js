import bcrypt from 'bcryptjs';

export const generateHash = (password, saltRounds) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));

export const compareHash = (password, hashPassword) =>
  bcrypt.compareSync(password, hashPassword);
