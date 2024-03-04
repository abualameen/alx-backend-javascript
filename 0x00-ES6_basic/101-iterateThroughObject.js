export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator.allEmployees.engineering) {
    result += `${employee} | `;
  }

  // Remove the last ' | ' from the result
  result = result.slice(0, -3);

  return result;
}

