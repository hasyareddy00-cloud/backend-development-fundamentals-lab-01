
const express = require("express");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "books.db");
let db;

// Initialize database
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
    console.error("Database error:", error.message);
    process.exit(1);
  }
};

// 1. Get all books with search, sorting and filters
app.get("/books/", async (req, res) => {
  try {
    const {
      search_q = "",
      order_by = "id",
      order = "ASC",
      limit = "10",
      offset = "0",
      min_price,
      max_price,
    } = req.query;

    const allowedColumns = ["id", "title", "author", "price", "pages"];

    const sortOrder = order.toUpperCase();
    const limitValue = Number(limit);
    const offsetValue = Number(offset);

    if (
      !allowedColumns.includes(order_by) ||
      !["ASC", "DESC"].includes(sortOrder) ||
      !Number.isInteger(limitValue) ||
      limitValue <= 0 ||
      !Number.isInteger(offsetValue) ||
      offsetValue < 0
    ) {
      return res.status(400).json({
        message: "Invalid query parameters",
      });
    }

    if (
      (min_price !== undefined && !Number.isFinite(Number(min_price))) ||
      (max_price !== undefined && !Number.isFinite(Number(max_price)))
    ) {
      return res.status(400).json({
        message: "Price must be numeric",
      });
    }

    if (
      min_price !== undefined &&
      max_price !== undefined &&
      Number(min_price) > Number(max_price)
    ) {
      return res.status(400).json({
        message: "Minimum price cannot exceed maximum price",
      });
    }

    let query = "SELECT * FROM book WHERE title LIKE ?";
    const params = [`%${search_q}%`];

    if (min_price !== undefined) {
      query += " AND price >= ?";
      params.push(Number(min_price));
    }

    if (max_price !== undefined) {
      query += " AND price <= ?";
      params.push(Number(max_price));
    }

    query += ` ORDER BY ${order_by} ${sortOrder} LIMIT ? OFFSET ?`;
    params.push(limitValue, offsetValue);

    const books = await db.all(query, params);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve books" });
  }
});

// 2. Get book by ID
app.get("/books/:bookId/", async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await db.get(
      "SELECT * FROM book WHERE id = ?",
      [bookId]
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve book" });
  }
});

// Validate book details
const validateBook = (body) => {
  const { title, author, price, pages } = body;

  return (
    typeof title === "string" &&
    title.trim() !== "" &&
    typeof author === "string" &&
    author.trim() !== "" &&
    typeof price === "number" &&
    Number.isFinite(price) &&
    price >= 0 &&
    Number.isInteger(pages) &&
    pages > 0
  );
};

// 3. Add a book
app.post("/books/", async (req, res) => {
  try {
    if (!validateBook(req.body)) {
      return res.status(400).json({
        message: "Title, author, numeric price and valid pages are required",
      });
    }

    const { title, author, price, pages } = req.body;

    const result = await db.run(
      `INSERT INTO book (title, author, price, pages)
       VALUES (?, ?, ?, ?)`,
      [title.trim(), author.trim(), price, pages]
    );

    res.status(201).json({
      message: "Book added successfully",
      bookId: result.lastID,
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to add book" });
  }
});

// 4. Update a book
app.put("/books/:bookId/", async (req, res) => {
  try {
    if (!validateBook(req.body)) {
      return res.status(400).json({
        message: "Invalid book details",
      });
    }

    const { title, author, price, pages } = req.body;
    const { bookId } = req.params;

    const result = await db.run(
      `UPDATE book
       SET title = ?, author = ?, price = ?, pages = ?
       WHERE id = ?`,
      [title.trim(), author.trim(), price, pages, bookId]
    );

    if (result.changes === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to update book" });
  }
});

// 5. Delete a book
app.delete("/books/:bookId/", async (req, res) => {
  try {
    const { bookId } = req.params;

    const result = await db.run(
      "DELETE FROM book WHERE id = ?",
      [bookId]
    );

    if (result.changes === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete book" });
  }
});

initializeDBAndServer();
