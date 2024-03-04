export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const flattenedEmployees = departments.flat();

  let currentIndex = 0;

  const iterator = {
    next() {
      if (currentIndex < flattenedEmployees.length) {
        return { value: flattenedEmployees[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
