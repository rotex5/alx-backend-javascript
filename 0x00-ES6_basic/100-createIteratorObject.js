function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flatMap((employee) => employee);
  // console.log(employees);
  return employees;
}

export default createIteratorObject;
