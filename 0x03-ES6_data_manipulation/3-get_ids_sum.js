function getStudentIdsSum(params) {
  const result = params
    .map(({ id }) => id)
    .reduce((accumlator, currentItem) => accumlator + currentItem);

  return result;
}

export default getStudentIdsSum;
