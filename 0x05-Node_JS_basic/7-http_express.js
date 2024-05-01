const express = require('express');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const app = express();

// Define route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define route for /students endpoint
app.get('/students', (req, res) => {
  const database = process.argv[2] || '';
  countStudents(database)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => { // Use the 'err' variable in the catch block
      console.error(err); // Log the error for debugging purposes
      res.status(500).send('Internal Server Error');
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
module.exports = app;
