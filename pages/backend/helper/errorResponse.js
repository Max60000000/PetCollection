let errorResponse = (error, req, res, next) => {
  res.json({
    success: false,
    message: error.message,
  });
};

export default errorResponse
