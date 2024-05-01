const fs = require('fs');

function countStudents(path) {
  let csStudents = 0;
  let sweStudents = 0;
  const csStudentsList = [];
  const sweStudentsList = [];

  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    for (const line of lines) {
      if (line) {
        const [firstname, , , field] = line.split(',');
        if (field === 'CS') {
          csStudentsList.push(firstname);
          csStudents += 1;
        } else if (field === 'SWE') {
          sweStudentsList.push(firstname);
          sweStudents += 1;
        }
      }
    }

    console.log(`Number of students: ${csStudents + sweStudents}`);
    console.log(`Number of students in CS: ${csStudents}. List: ${csStudentsList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${sweStudentsList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
