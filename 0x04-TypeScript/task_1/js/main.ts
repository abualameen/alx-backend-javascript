interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
}

// Write an interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Test the function
const result: string = printTeacher("John", "Doe");
console.log(result);


// Define an interface for the Student class constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define an interface for the Student class
interface Student {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the Student class
class StudentClass implements Student {
  // Properties
  private firstName: string;
  private lastName: string;

  // Constructor
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to indicate working on homework
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method to display the first name of the student
  displayName(): string {
    return this.firstName;
  }
}

// Test the StudentClass
const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
