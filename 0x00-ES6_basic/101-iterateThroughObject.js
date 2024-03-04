export default function iterateThroughObject(reportWithIterator) {
  // Check if reportWithIterator is a valid object
  if (
    !reportWithIterator ||
    typeof reportWithIterator !== 'object' ||
    !reportWithIterator.allEmployees ||
    typeof reportWithIterator.allEmployees !== 'object'
  ) {
    throw new Error('Invalid input: reportWithIterator must be a valid object.');
  }

  const allEmployees = reportWithIterator.allEmployees;
  const employeeNames = [];

  // Iterate through each department and concatenate employee names
  for (const employees of Object.values(allEmployees)) {
    employeeNames.push(...employees);
  }

  // Join all employee names with '|'
  return employeeNames.join(' | ');
}

