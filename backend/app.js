/* import express from "express";
import cors from "cors";
import getBooks from "./apiRoutes/getBooks.js";
import addBook from "./apiRoutes/addBook.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", getBooks);
app.use("/api", addBook);

export default app; */
/*
const express = require("express");
 const booksRouter = require("./apiRoutes/getBooks.js");
const addBookRouter = require("./apiRoutes/addBook.js");

const app = express();

app.use(express.json());

app.use("/api", booksRouter);
app.use("/api", addBookRouter);

module.exports = app; */

import express from "express";
import cors from "cors";
import getBooks from "./apiRoutes/getBooks.js";
import addBook from "./apiRoutes/addBook.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", getBooks);
app.use("/api", addBook);

export default app;
