const express = require('express');
const app = express();
const port = 7865;

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.send(`
    <script>
      console.log("API available on localhost port ${port}");
    </script>
    <h1>Welcome to the payment system</h1>
  `);
});

// Start the server
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Export the server instance for testing
module.exports = server;
