//hash password function
import bcrypt from "bcrypt";

export let hashPassword = async (password) => {
  let _hashPassword = await bcrypt.hash(password, 10);
  return _hashPassword;
};

export let comparePassword = async (password, hashPassword) => {
  let isValidPassword = await bcrypt.compare(password, hashPassword);
  return isValidPassword;
};

//  password     =>  hashPasswordFun   => hashPassword
// password, hashPassword           => compare PasswordFune => true|false
