import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const students = { CS: [], SWE: [] };
        lines.forEach(line => {
          const [firstname, lastname, age, field] = line.split(',');
          if (field === 'CS' || field === 'SWE') {
            students[field].push(firstname);
          }
        });
        resolve(students);
      }
    });
  });
}
