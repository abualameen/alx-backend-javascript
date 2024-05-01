import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      const response = [
        'This is the list of our students',
        `Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`,
        `Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`
      ];
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase('./database.csv');
      const studentList = students[major];
      const response = `List: ${studentList.join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

export default StudentsController;
