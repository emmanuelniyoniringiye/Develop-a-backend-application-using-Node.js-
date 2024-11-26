let updatedGrades = students.map(student => ({
    ...student,
    grade: student.grade + 5
}));

console.log(updatedGrades);

// Using filter to get students older than 21
let olderStudents = students.filter(student => student.age > 21);

console.log(olderStudents);

// Using reduce to calculate the total grade sum
let totalGrade = students.reduce((sum, student) => sum + student.grade, 0);

console.log(totalGrade); // Sum of all students' grades