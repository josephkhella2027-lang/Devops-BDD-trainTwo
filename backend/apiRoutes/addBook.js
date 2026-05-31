/* const express = require("express");
const books = require("../utilities/BooksArray.js");
const router = express.Router();

let newId = books.length ? Math.max(...books.map((b) => b.id)) : 0;

const generateId = () => ++newId;

router.post("/add-book", (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const newBook = {
      id: generateId(),
      title,
      description,
      price,
    };

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
module.exports = router; */

import express from "express";
import books from "../utilities/BooksArray.js";
const router = express.Router();
const booksArr = books;
let newId = books.length ? Math.max(...books.map((b) => b.id)) : 0;

const generateId = () => ++newId;

router.post("/add-book", (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const newBook = {
      id: generateId(),
      title,
      description,
      price,
    };

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

export default router;
