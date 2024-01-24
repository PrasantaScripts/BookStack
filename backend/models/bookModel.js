import mongoose from "mongoose";
//define a new user schema with username and password properties of type string, required: true
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: String, required: true },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
