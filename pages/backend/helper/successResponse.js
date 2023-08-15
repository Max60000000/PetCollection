let successResponse = (res, statusCode, message, result) => {
  res.status(statusCode).json({
    success: true,
    message: message,
    data: result,
  });
};

export default successResponse;
