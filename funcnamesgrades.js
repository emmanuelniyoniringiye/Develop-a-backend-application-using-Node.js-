let students = [
    { name: "John", age: 20, grade: 85 },
    { name: "Jane", age: 22, grade: 90 },
    { name: "Jim", age: 21, grade: 70 },
    { name: "Jake", age: 23, grade: 95 }
];

function getTopStudents(students, threshold) {
    return students
        .filter(student => student.grade > threshold)
        .map(student => student.name);
}

// Test the function
console.log(getTopStudents(students, 80)); // ["John", "Jane", "Jake"]