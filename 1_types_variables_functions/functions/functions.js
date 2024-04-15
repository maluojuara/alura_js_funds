function showStudentName(studentName) {
    console.log(studentName);
}

showStudentName('Malu');

function showStudentInfos(studentName, studentGrade){
    console.log(`the name is ${studentName} and the grade is ${studentGrade}`);
}

showStudentInfos('Malu', 10);
showStudentInfos('Caroline', 7);

function returnStudentInfos(studentName, studentGrade){
    return `the name is ${studentName} and the grade is ${studentGrade}`;
}

console.log(returnStudentInfos('Lucas', 9));

// hoisting - can declare functions after its use 