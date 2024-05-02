const express = require('express');
const app = express();
const port = 7865;
const localhost = 'localhost';

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

const server = app.listen(port, localhost, () => {
  console.log(`API available on ${localhost} port ${port}`);
});

module.exports = server;
