let isAuthorization = (roles) => {
  return (req, res, next) => {
    let tokenRole = req.info.role;
    if (roles.includes(tokenRole)) {
      next();
    } else {
      let error = new Error("User is not Authorized");
      throw error;
    }
  };
};
export default isAuthorization;
