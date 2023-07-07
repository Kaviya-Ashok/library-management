const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Authentication endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform authentication logic here (e.g., check username and password against a database)
  // You can replace the placeholder logic with your actual authentication implementation

  if (username === 'kaviya' && password === 'kaviya19') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Perform signup logic here (e.g., create a new user in the database)
  // You can replace the placeholder logic with your actual signup implementation

  res.status(200).json({ message: 'Signup successful' });
});

// Search endpoint
app.get('/search', (req, res) => {
  const { searchText } = req.query;

  // Perform search logic here (e.g., filter books based on search text)
  // You can replace the placeholder logic with your actual search implementation

  const filteredBooks = books.filter((book) => {
    const bookTitle = book.title.toLowerCase();
    const bookAuthor = book.author.toLowerCase();
    const bookSubject = book.subject.toLowerCase();
    const bookPublishDate = book.publishDate;
    return (
      bookTitle.includes(searchText) ||
      bookAuthor.includes(searchText) ||
      bookSubject.includes(searchText) ||
      bookPublishDate.includes(searchText)
    );
  });

  res.status(200).json(filteredBooks);
});

// Add more API endpoints as needed

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});
app.get('/books', (req, res) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/book/:id', (req, res) => {
  const bookId = req.params.id;
  pool.query('SELECT * FROM books WHERE id = ?', [bookId], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

