const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Handle different URL paths
  if (url.pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (url.pathname === '/students') {
    try {
      // Read the database file asynchronously
      const database = await fs.readFile(process.argv[2], 'utf-8');
      const students = database.trim().split('\n');

      // Extract the number of students and students' details
      const numOfStudents = students.length;
      const csStudents = students.filter((student) => student.includes(',CS,')).map((student) => student.split(',')[0]);
      const sweStudents = students.filter((student) => student.includes(',SWE,')).map((student) => student.split(',')[0]);

      // Construct the response
      const response = `This is the list of our students\nNumber of students: ${numOfStudents}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`;

      res.end(response);
    } catch (error) {
      // Handle error if database file cannot be read
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    // Handle other paths
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
module.exports = app;
