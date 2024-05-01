const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    let csStudents = 0;
    let sweStudents = 0;
    const csStudentsList = [];
    const sweStudentsList = [];

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        for (const line of lines) {
          if (line) {
            const [firstname, , , field] = line.split(',').map(item => item.trim().replace(/"/g, ''));
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
        resolve();
      }
    });
  });
}

module.exports = countStudents;
