export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  if (reportWithIterator.allEmployees && reportWithIterator.allEmployees.engineering) {
    const engineeringEmployees = reportWithIterator.allEmployees.engineering;
    result = engineeringEmployees.join(' | ');
  }

  return result;
}

