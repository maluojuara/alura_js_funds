const grades = [10, 6.5, 8, 7.5];

let gradesSum = 0;

grades.forEach(function (grade) {
    gradesSum += grade;
})

// callback function 

const averageGrade = gradesSum / grades.length;

console.log ("Average grade is: ", averageGrade);