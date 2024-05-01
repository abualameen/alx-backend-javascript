const http = require('http');
const fs = require('fs').promises;

// const hostname = '127.0.0.1';
const PORT = 1245;
const DEFAULT_DATABASE_PATH = 'database.csv'; // Define a default database file path

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let csStudents = 0;
  let sweStudents = 0;
  const csStudentsList = [];
  const sweStudentsList = [];

  const { method, url } = req;
  if (method === 'GET' && url === '/') {
    res.end('Hello Holberton School!');
  } else if (method === 'GET' && url === '/students') {
    try {
      // Read the database file asynchronously
      const databasePath = DEFAULT_DATABASE_PATH; // Use provided path or default path
      const database = await fs.readFile(databasePath, 'utf-8');

      const students = database.split('\n');

      for (const line of students) {
        if (line) {
          const [firstname, , , field] = line.split(',').map((item) => item.trim().replace(/"/g, ''));
          if (field === 'CS') {
            csStudentsList.push(firstname);
            csStudents += 1;
          } else if (field === 'SWE') {
            sweStudentsList.push(firstname);
            sweStudents += 1;
          }
        }
      }
      const response = `This is the list of our students\nNumber of students: ${csStudents + sweStudents}\n`
      + `Number of students in CS: ${csStudents}. List: ${csStudentsList.join(', ')}\n`
      + `Number of students in SWE: ${sweStudents}. List: ${sweStudentsList.join(', ')}`;

      res.end(response); // No response body needed for curl command
    } catch (error) {
      // Handle error if database file cannot be read
      console.error(error);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    // Handle other paths
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
