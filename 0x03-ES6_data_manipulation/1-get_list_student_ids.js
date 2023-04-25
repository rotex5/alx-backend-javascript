function getListStudentIds(params) {
  if (!Array.isArray(params)) return [];

  const result = params.map(({ id }) => id);

  return result;
}

export default getListStudentIds;
