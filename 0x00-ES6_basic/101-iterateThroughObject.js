export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = reportWithIterator.allEmployees;
  const employeeNames = [];

  // Iterate through all employees and concatenate their names
  for (const department in allEmployees) {
    const employees = allEmployees[department];
    employeeNames.push(...employees);
  }

  // Join all employee names with '|'
  return employeeNames.join(' | ');
}

