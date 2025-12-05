Book Catalog API

A simple and efficient RESTful API for managing a library's book catalog.
Built using Node.js, Express, and MongoDB (Mongoose), this API supports full CRUD operations and searching books by title or author.

🚀 Features

➕ Add new books

📄 Get all books

🔍 Search books by:

Title (case-insensitive)

Author (case-insensitive)

📘 Get book by ID

✏️ Update book details

❌ Delete a book

📦 Uses MongoDB for data storage

🛠️ Tech Stack

Node.js

Express.js

MongoDB + Mongoose

dotenv

Morgan

Cors

📁 Project Structure
Book-Catalog-API/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── bookController.js
│   ├── models/
│   │   └── Book.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Priyanshu87571/Book-Catalog-API.git
cd Book-Catalog-API

2️⃣ Install Dependencies
npm install

3️⃣ Add Environment Variables

Create a .env file in the root folder:

MONGO_URI=mongodb://127.0.0.1:27017/book_catalog_db
PORT=5000


Or use a MongoDB Atlas connection string.

4️⃣ Start the Server

Development (with nodemon):

npm run dev


Production:

npm start


Server runs at:

http://localhost:5000
