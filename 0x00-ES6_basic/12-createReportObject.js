function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  const getNumberOfDepartments = (allEmployees) => {
    const departmentCount = Object.keys(allEmployees).length;
    return departmentCount;
  };

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}

export default createReportObject;
