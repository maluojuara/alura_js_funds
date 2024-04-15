const studentFailed = function (finalGrade, absences){
    if (finalGrade < 7 && absences > 4){
        return true;
    }
    return false;
}

console.log(studentFailed(10, 6));
console.log(studentFailed(6, 5));

