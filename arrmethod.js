let students = [
    { name: "John", age: 20, grade: 85 },
    { name: "Jane", age: 22, grade: 90 },
    { name: "Jim", age: 21, grade: 70 },
    { name: "Jake", age: 23, grade: 95 }
];

// 1. Using map to increase student grades by 5 points
let updatedGrades = students.map(student => ({
    ...student,
    grade: student.grade + 5
}));
console.log("Updated Grades:", updatedGrades);

// 2. Using filter to get students older than 21
let olderStudents = students.filter(student => student.age > 21);
console.log("Students older than 21:", olderStudents);

// 3. Using reduce to calculate the total grade sum
let totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
console.log("Total Grade Sum:", totalGrade);
