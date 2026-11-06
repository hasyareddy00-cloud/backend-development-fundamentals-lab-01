# Lab 3: REST API, Query Parameters, Validation and Debugging

## Student Details
- **Name:** B. Hasya Reddy
- **Department:** CSE – GEN AI
- **Section:** GEN AI – 2A
- **College:** Aurora Deemed to be University

## Objective
To develop REST APIs with search, sorting, filtering, input validation and proper HTTP status codes using Node.js, Express.js and SQLite.

## Technologies Used
- Node.js
- Express.js
- SQLite
- JavaScript
- Postman / PowerShell

## Installation and Execution

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Server URL:
   `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Get all books |
| GET | `/books/:bookId/` | Get book by ID |
| POST | `/books/` | Add a book |
| PUT | `/books/:bookId/` | Update a book |
| DELETE | `/books/:bookId/` | Delete a book |

## Query Parameters
- `search_q` – Search books by title
- `order_by` – Sort by a column
- `order` – ASC or DESC
- `limit` – Limit results
- `offset` – Skip results
- `min_price` – Minimum price
- `max_price` – Maximum price

## Validation and Status Codes
- 200 – Successful request
- 201 – Book created
- 400 – Invalid input
- 404 – Book not found
- 500 – Server error

## Testing
API testing was performed using PowerShell HTTP requests.

Tested features:
- Get all books
- Search and sorting
- Limit and price filtering
- POST validation
- Create, read, update and delete operations
- Missing book handling

## Screenshots
Lab 3 screenshots are stored in `screenshots/lab3/`.

## Live Deployment

**Platform:** Render

**Live Server URL:**
https://backend-lab-03-yzg3.onrender.com

**Books API Endpoint:**
https://backend-lab-03-yzg3.onrender.com/books/

## Conclusion
Successfully developed and tested REST APIs with query parameters, validation, filtering and appropriate HTTP status codes.