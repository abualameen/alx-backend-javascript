const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Index page route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart page route
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Available payments endpoint
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

// Login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
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
