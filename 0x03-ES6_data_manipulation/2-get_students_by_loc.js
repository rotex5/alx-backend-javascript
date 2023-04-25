function getStudentsByLocation(listParams, stringParams) {
  const result = listParams.filter(({ location }) => location === stringParams);
  return result;
}

export default getStudentsByLocation;
