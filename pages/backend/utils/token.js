import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export let generateToken = expressAsyncHandler(
  async (info, secretKey, expiryInfo) => {
    let token = await jwt.sign(info, secretKey, expiryInfo);
    return token;
  }
);

export let verifyToken = expressAsyncHandler(async (token, secretKey) => {
  let info = await jwt.verify(token, secretKey);
  return info;
});

//info
//secretKey,
//expiryInfo

//token
//secretKey
