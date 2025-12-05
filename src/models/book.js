const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true
    },
    genre: {
      type: String,
      trim: true
    },
    publicationYear: {
      type: Number,
      min: [0, "Publication year cannot be negative"]
    },
    availability: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
