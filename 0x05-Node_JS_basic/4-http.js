const http = require('http');
const hostname = '127.0.0.1';
const PORT = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello Holberton School!');
});

// Listen for incoming requests on the specified port
app.listen(PORT, hostname, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
module.exports = app;
