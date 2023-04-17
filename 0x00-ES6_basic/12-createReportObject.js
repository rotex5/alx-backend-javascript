export default function createReportObject(employeesList) {

  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      const keyLen = Object.keys(employeesList).length;
      return keyLen;
    },
  };
}
