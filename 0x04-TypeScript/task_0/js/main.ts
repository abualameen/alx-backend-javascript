// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles"
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Using Vanilla JavaScript, render a table and append a new row for each student
const table = document.createElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
