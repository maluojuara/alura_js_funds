const grade1stExam = 8;
const grade2ndExam = 6.3;
const grade3rdExam = 7;
const grade4thExam = 9.3;

let finalGrade = (grade1stExam + grade2ndExam + grade3rdExam + grade4thExam) / 4; // addition and division


if (finalGrade >= 7){
    finalGrade += finalGrade * 0.1;
}

console.log("The final grade is:", finalGrade.toFixed(2));