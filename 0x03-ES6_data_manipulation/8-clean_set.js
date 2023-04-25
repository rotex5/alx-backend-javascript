function cleanSet(set, startString) {
  if (startString === '' || startString === undefined) return '';

  const result = [];
  const newArray = new Array(...set);
  /*
   * const result = newArray
    .filter((elem) => (elem !== undefined ? elem.startsWith(startString) : ''))
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''))
    .join('-');
    */

  for (const item of newArray) {
    if (item && item.startsWith(startString)) {
      result.push(item !== undefined ? item.slice(startString.length) : '');
    }
  }

  return result.join('-');
}

export default cleanSet;
