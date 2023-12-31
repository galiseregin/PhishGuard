// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Serve static files from the same directory as this script
app.use(express.static('.'));

// When a GET request is made to the root, send index.html
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // TODO: Validate and authenticate user
  // If valid, redirect to user's dashboard
  // If invalid, send an error message
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // TODO: Validate input, hash password, and store in database
  // Redirect to login page or directly log them in
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
