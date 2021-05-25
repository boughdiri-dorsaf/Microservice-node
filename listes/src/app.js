const fetch = require("node-fetch");
const express = require("express");

const Book = require("./models/books_model");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "search" });
});


app.get("/api/v1/search", async (req, res) => {
  
  
  const booksPromise = Book.find({});
  const promises = [booksPromise];
  const [books] = await Promise.all(promises);

  res.json(books);
});


module.exports = app;
