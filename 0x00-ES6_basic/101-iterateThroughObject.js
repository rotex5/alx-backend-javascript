function iterateThroughObject(reportWithIterator) {
  const employees = Object.values(reportWithIterator);
  // console.log(employees);
  return employees.join(' | ');
}

export default iterateThroughObject;
