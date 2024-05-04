const classJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const classJava = [6, 5, 8, 9, 5, 6];
const classPython = [7, 3.5, 8, 9.5];

function calculateAvgGrade (listOfGrades) {
    const sumOfGrades = listOfGrades.reduce((acum, grade) => acum + grade, 0);

    const averageGrade = sumOfGrades / listOfGrades.length;

    return averageGrade;
}

console.log(calculateAvgGrade(classJS));
console.log(calculateAvgGrade(classJava));
console.log(calculateAvgGrade(classPython));