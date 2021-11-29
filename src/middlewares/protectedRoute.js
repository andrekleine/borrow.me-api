import NotAuthorized from '../errors/NotAuthorized';
import { verifyLoginToken } from '../utils/jwt';

const protectedRoute = (req, res, next) => {
  try {
    const bearerToken = req.get('Authorization');
    if (!bearerToken) {
      throw new NotAuthorized('Missing token');
    }

    try {
      const token = bearerToken.slice(7);
      const tokenInfo = verifyLoginToken(token);

      // Insert user info inside request
      req.user = {
        id: tokenInfo.id,
        role: tokenInfo.role,
      };

      next();
    } catch (error) {
      throw new NotAuthorized('Invalid or expired token');
    }
  } catch (error) {
    next(error);
  }
};

export default protectedRoute;
