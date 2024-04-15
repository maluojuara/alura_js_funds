const studentFailed = (finalGrade, absences) => {
    if (finalGrade < 7 && absences > 4){
        return true;
    }
    return false;
}

const showName = (studentName) => studentName;

console.log(studentFailed(10, 6));
console.log(studentFailed(6, 5));

console.log(showName('Caroline'));