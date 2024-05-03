const express = require('express');
const app = express();
const port = 7865;

// Listen to port 7865 and log message to the terminal
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

module.exports = server;
