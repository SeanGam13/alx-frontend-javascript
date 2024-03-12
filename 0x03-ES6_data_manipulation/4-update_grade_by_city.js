export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchGrade = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      return {
        ...student,
        grade: matchGrade ? matchGrade.grade : 'N/A',
      };
    });
}
