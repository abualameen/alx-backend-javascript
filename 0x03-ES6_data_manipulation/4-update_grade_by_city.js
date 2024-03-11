export default function updateStudentGradeByCity(listObj, city, newGrades) {
  // return listObj

  const studentsCity = listObj.filter((stud) => stud.location === city);
  // console.log(studentsCity);
  const updatedStudents = studentsCity.map((stud) => {
    const checkGrade = newGrades.find((grade) => grade.studentId === stud.id);
    if (checkGrade) {
      return {
        ...stud,
        grade: checkGrade.grade,
      };
    }
    return {
      ...stud,
      grade: 'N/A',
    };
  });

  return updatedStudents;
}
