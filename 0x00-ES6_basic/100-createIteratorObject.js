export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const departments = Object.keys(employees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[currentDepartmentIndex];
      const departmentEmployees = employees[department];

      if (currentEmployeeIndex >= departmentEmployees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const employee = departmentEmployees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}

