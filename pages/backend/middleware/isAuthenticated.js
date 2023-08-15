import expressAsyncHandler from "express-async-handler";
import { verifyToken } from "../utils/token.js";
import { secretKey } from "../config/config.js";

let isAuthenticated = expressAsyncHandler(async (req, res, next) => {
  let bearerToken = req.headers.authorization; //"Bearer 123423asdf"
  let arrBearerToken = bearerToken.split(" "); //["Bearer","1234412asdf"]
  let token = arrBearerToken[1];

  let info = await verifyToken(token, secretKey);
  req.info = info;
  next();
});

export default isAuthenticated;
