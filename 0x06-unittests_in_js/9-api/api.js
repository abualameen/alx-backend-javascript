const express = require('express');
const app = express();
const port = 7865;

// Index page route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart page route
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Handle invalid cart ID
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Invalid cart ID');
});

// Start the server
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
