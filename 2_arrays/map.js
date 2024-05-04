const grades = [10, 9.7, 8, 7, 6];

function update (grade) {
    if (grade <= 9.5){
        grade += 0.5;
    }
    else if (grade <= 10) {
        grade = 10;
    }

    return grade;
}

const updatedGrades = grades.map(update);

console.log(updatedGrades);