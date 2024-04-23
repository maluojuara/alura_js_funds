const grades = [10, 6.5, 8, 7.5];

let gradesSum = 0;

for (let grade of grades) {
    gradesSum += grade;
}

const averageGrade = gradesSum / grades.length;

console.log ("Average grade is: ", averageGrade);