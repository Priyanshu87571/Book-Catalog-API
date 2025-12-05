const Book = require("../models/Book");

// @desc   Create a new book
// @route  POST /api/books
// @access Public
const createBook = async (req, res, next) => {
  try {
    const { title, author, genre, publicationYear, availability } = req.body;

    const newBook = await Book.create({
      title,
      author,
      genre,
      publicationYear,
      availability
    });

    res.status(201).json({
      success: true,
      data: newBook
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Get all books (with optional search)
// @route  GET /api/books
// @access Public
const getBooks = async (req, res, next) => {
  try {
    const { title, author } = req.query;

    const query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" }; // case-insensitive search
    }
    if (author) {
      query.author = { $regex: author, $options: "i" };
    }

    const books = await Book.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Get a single book by ID
// @route  GET /api/books/:id
// @access Public
const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      });
    }

    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Update a book
// @route  PUT /api/books/:id
// @access Public
const updateBook = async (req, res, next) => {
  try {
    const { title, author, genre, publicationYear, availability } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, genre, publicationYear, availability },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      });
    }

    res.status(200).json({
      success: true,
      data: updatedBook
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Delete a book
// @route  DELETE /api/books/:id
// @access Public
const deleteBook = async (req, res, next) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
};
