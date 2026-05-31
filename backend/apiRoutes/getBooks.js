/* 
const express = require("express");
const books = require("../utilities/BooksArray");

const router = express.Router();

router.get("/books", (req, res) => {
  try {
    return res.status(200).json({
      message: "Successfully got books",
      books,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error getting books",
      error: err.message,
    });
  }
});

module.exports = router;
 */

import express from "express";
import books from "../utilities/BooksArray.js";
const router = express.Router();
const booksArr = books;

router.get("/books", async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Successfully get Books", books: booksArr });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "error with get Books", error: err });
  }
});

export default router;
