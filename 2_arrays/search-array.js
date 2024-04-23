function showNameAndGrade (student, list) {
    if (students.includes(student)) {
        const [students, grades] = list;
        const index = students.indexOf(student);
        const gradeStudent = grades[index];

        console.log(`The grade of student ${student} is ${gradeStudent}`);
    }
    else{
        console.log("Student does not exits on list");
    }
}

const students = ['João', 'Juliana', 'Caio', 'Ana'];
const grades = [10, 8, 7.5, 9];

const list = [students, grades];


showNameAndGrade('Juliana', list);
showNameAndGrade('Vinicius', list);