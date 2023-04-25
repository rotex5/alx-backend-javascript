function hasValuesFromArray(setParams, arrayParams) {
  // const subSet = new Set(arrayParams);
  // return setParams.has(subSet);
  /*
    for (let i = 0; i < arrayParams.length; i++) {
    if (!setParams.has(arrayParams[i])) {
      return false;
    }
  }
  return true;
  */
  // issue with i++
  // array.every() can also be used

  for (const elem of arrayParams) {
    if (!setParams.has(elem)) return false;
  }
  return true;
}

export default hasValuesFromArray;
