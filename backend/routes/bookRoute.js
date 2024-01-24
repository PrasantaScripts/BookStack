import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

// route for save a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "send all the data of the related books" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log("error messege :>> ", error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for  getting all book from server
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      results: books,
    });
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).send({ message: "Error in fetching data" });
  }
});

//route for getting a particular book
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json({ book });
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).send({ message: "Error in fetching data" });
  }
});

//route for updating a book from the database
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "send all the data of the related books" });
    }

    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(id, req.body);

    if (!updatedBook) {
      return res.status(404).send({ message: "No such update/book found!" });
    }
    return res.status(200).send({ message: "book updated successfully" });
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).send({ message: "Error In Updating" });
  }
});

//route for delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = Book.findByIdAndDelete(id);
    if (!result) {
      return res
        .status(404)
        .send({ message: "The book with given ID was not found." });
    }
    res.send({ message: "book deleted successfully" });
  } catch (error) {
    console.log("error.message :>> ", error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
