import { isValidObjectId } from 'mongoose';

import InvalidIdException from '../errors/InvalidId';

const validateId = (id) => {
  const isValid = isValidObjectId(id);

  if (!isValid) {
    throw new InvalidIdException();
  }
};

export default validateId;