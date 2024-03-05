export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  // Iterate through the iterator object
  for (const employee of reportWithIterator) {
    result += `${employee} | `; // Use template literals instead of string concatenation
  }

  // Remove the trailing ' | ' from the result string
  result = result.slice(0, -3);

  return result;
}
