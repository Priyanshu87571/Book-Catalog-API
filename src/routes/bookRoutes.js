const express = require("express");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

const router = express.Router();

router.route("/")
  .post(createBook)   // Create
  .get(getBooks);     // Read all + search

router.route("/:id")
  .get(getBookById)   // Read one
  .put(updateBook)    // Update
  .delete(deleteBook);// Delete

module.exports = router;
