export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const flattenedEmployees = departments.flat();

  let currentIndex = 0;

  const iterator = {
    next() {
      if (currentIndex < flattenedEmployees.length) {
        const value = flattenedEmployees[currentIndex];
        currentIndex++;
        return { value, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
