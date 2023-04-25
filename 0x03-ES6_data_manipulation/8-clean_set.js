function cleanSet(set, startString) {
  if (startString === '' || startString === undefined) return '';

  const newArray = new Array(...set);
  const result = newArray
    .filter((elem) => (elem !== undefined ? elem.startsWith(startString) : ''))
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''))
    .join('-');

  return result;
}

export default cleanSet;
