const books = require("./theGoodBook");
const express = require("express");
const app = express();

app.get("/get-books", async (req, res) => {
  await res.status(200).json(books);
});

app.get("/get-book/:id", async (req, res) => {
  const bookId = req.params.id;

  let foundBook = { message: "no book found" };

  books.forEach((book) => {
    if (book.id === bookId) {
      foundBook = book;
    }
  });

  await res.status(200).json(foundBook);
});

app.listen("5000", () => {
  console.log("server is up on " + "5000");
});
