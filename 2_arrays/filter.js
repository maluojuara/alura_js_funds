const students = ["Ana", "Marcos", "Maria", "Mauro"];

const grades = [7, 4.5, 8, 7.5];

const lenName = students.filter((student) => {
    return student.length < 4; // true or false
}) 

console.log(lenName);


const approvedStudents = students.filter((_, index) => grades[index] >= 7);

console.log(approvedStudents);