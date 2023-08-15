import mongoose from "mongoose";
import { dbUrl } from "../config/config.js";
let connectMongodb = async() => {
  // mongoose.connect('');
  
  try {
 await mongoose.connect('mongodb://127.0.0.1/express-dw4')

    
  } catch (error) {
    console.log(error.message)
    
  }
};

export default connectMongodb;
