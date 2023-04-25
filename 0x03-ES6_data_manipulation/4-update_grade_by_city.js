function updateStudentGradeByCity(listParams, stringParam, newGrade) {
  const result = listParams
    .filter(({ location }) => location === stringParam)
    .map((student) => {
      const gradeObj = newGrade.find(
        (grade) => grade.studentId === student.id,
      );
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });

  return result;
}

export default updateStudentGradeByCity;
