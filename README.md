# Book Catalog API

A simple RESTful API for managing a library's book catalog.  
Built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

## Features

- Create, read, update, and delete (CRUD) books
- Each book has:
  - `title` (string, required)
  - `author` (string, required)
  - `genre` (string)
  - `publicationYear` (number)
  - `availability` (boolean, default: true)
- Search books by:
  - title (partial, case-insensitive)
  - author (partial, case-insensitive)

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- dotenv, cors, morgan

## Getting Started

### 1. Clone & install

```bash
git clone <your-repo-url>
cd book-catalog-api
npm install
