export default function createIteratorObject(report) {
  const newArr = [];
  for (const value of Object.values(report.allEmployees)) {
    newArr.push(...value);
  }
  return newArr;
}
