/* import express from "express";
import books from "../utilities/BooksArray.js";
const router = express.Router();
const booksArr = books;
router.post("/add-book", async (req, res) => {
  try {
    const { title, description, price } = req.body;
    if (!title || !description || !price) {
      return res.status(400).json({ message: "Please fill All Filed" });
    }
    const newBook = {
      title,
      description,
      price,
    };
    booksArr.push(newBook);
    return res
      .status(201)
      .json({ message: "Successfully added Book", book: newBook });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "error with post Book ", error: err });
  }
});

export default router;
 */

const express = require("express");
const books = require("../utilities/BooksArray.js");

const router = express.Router();

router.post("/add-book", (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newBook = { title, description, price };

    books.push(newBook);

    return res.status(201).json({
      message: "Successfully added book",
      book: newBook,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error adding book",
      error: err.message,
    });
  }
});

module.exports = router;
