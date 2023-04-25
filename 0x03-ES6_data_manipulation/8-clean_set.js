function cleanSet(set, startString) {
  if (startString === '') return '';

  const newArray = new Array(...set);
  const result = newArray
    .filter((elem) => elem.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}

export default cleanSet;
