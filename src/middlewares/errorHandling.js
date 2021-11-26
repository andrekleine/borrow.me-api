const errorHandlingMiddleware = (err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({ message: err.message || 'A problem ocurred. Try again later' });
};

export default errorHandlingMiddleware;