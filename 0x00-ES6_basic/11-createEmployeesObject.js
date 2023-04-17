function createEmployeesObject(departmentName, employees) {
  const employeesObj = {
    [`${departmentName}`]: [...employees],
  };
  return employeesObj;
}

export default createEmployeesObject;
