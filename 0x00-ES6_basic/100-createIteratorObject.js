export default function createIteratorObject(report) {
  const newArray = [];
  for (const value of Object.values(report.allEmployees)) {
    newArray.push(...value);
  }
  return newArray;
}
