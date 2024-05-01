const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
const DEFAULT_DATABASE_PATH = 'database.csv';

app.get('/', async (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = DEFAULT_DATABASE_PATH;
    const database = await fs.readFile(databasePath, 'utf-8');
    const students = database.split('\n');

    let csStudents = 0;
    let sweStudents = 0;
    const csStudentsList = [];
    const sweStudentsList = [];

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

    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
