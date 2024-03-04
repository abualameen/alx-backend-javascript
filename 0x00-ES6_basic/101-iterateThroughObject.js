export default function iterateThroughObject(reportWithIterator) {
  // Check if reportWithIterator is a valid object
  if (
    !reportWithIterator ||
    typeof reportWithIterator !== 'object' ||
    !reportWithIterator.allEmployees ||
    typeof reportWithIterator.allEmployees !== 'object' ||
    reportWithIterator.allEmployees === null
  ) {
    throw new Error('Invalid input: reportWithIterator must be a valid object with allEmployees property.');
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

