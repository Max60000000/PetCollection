import { Schema } from "mongoose";

let blogSchema = Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
    minLength: [4, "Name field must be at least 4 character"],
    maxLength: [10, "Name field must be at most 10 character"],
  },
  price: {
    type: Number,
  },

  isStock: {
    type: Boolean,
  },
  // manufactureDate: { type: Date, default: new Date() }
});

export default blogSchema;
