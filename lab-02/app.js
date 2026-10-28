
const express = require("express");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "books.db");

let db;

// Initialize the database and start the server
const initializeDBAndServer = async () => {
  try {
    db = await sqlite.open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS book (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        price INTEGER NOT NULL,
        pages INTEGER NOT NULL
      )
    `);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database initialization failed:", error.message);
    process.exit(1);
  }
};

// 1. Get all books
app.get("/books/", async (request, response) => {
  try {
    const books = await db.all("SELECT * FROM book");
    response.send(books);
  } catch (error) {
    response.status(500).send("Unable to retrieve books");
  }
});

// 2. Get a book by ID
app.get("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;

    const book = await db.get(
      "SELECT * FROM book WHERE id = ?",
      [bookId]
    );

    if (book === undefined) {
      response.status(404).send("Book not found");
    } else {
      response.send(book);
    }
  } catch (error) {
    response.status(500).send("Unable to retrieve book");
  }
});

// 3. Add a new book
app.post("/books/", async (request, response) => {
  try {
    const { title, author, price, pages } = request.body;

    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      !Number.isInteger(price) ||
      !Number.isInteger(pages)
    ) {
      return response.status(400).send("Invalid book details");
    }

    const query = `
      INSERT INTO book (title, author, price, pages)
      VALUES (?, ?, ?, ?)
    `;

    const result = await db.run(query, [
      title,
      author,
      price,
      pages,
    ]);

    response.status(201).send({
      message: "Book added successfully",
      bookId: result.lastID,
    });
  } catch (error) {
    response.status(500).send("Unable to add book");
  }
});

// 4. Update a book by ID
app.put("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;
    const { title, author, price, pages } = request.body;

    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      !Number.isInteger(price) ||
      !Number.isInteger(pages)
    ) {
      return response.status(400).send("Invalid book details");
    }

    const query = `
      UPDATE book
      SET title = ?, author = ?, price = ?, pages = ?
      WHERE id = ?
    `;

    const result = await db.run(query, [
      title,
      author,
      price,
      pages,
      bookId,
    ]);

    if (result.changes === 0) {
      response.status(404).send("Book not found");
    } else {
      response.send("Book updated successfully");
    }
  } catch (error) {
    response.status(500).send("Unable to update book");
  }
});

// 5. Delete a book by ID
app.delete("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;

    const result = await db.run(
      "DELETE FROM book WHERE id = ?",
      [bookId]
    );

    if (result.changes === 0) {
      response.status(404).send("Book not found");
    } else {
      response.send("Book deleted successfully");
    }
  } catch (error) {
    response.status(500).send("Unable to delete book");
  }
});

// Start only after the database is initialized
initializeDBAndServer();
