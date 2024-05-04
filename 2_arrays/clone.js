const gradesList = [7, 7, 8, 9];

const newGradesList = gradesList;

newGradesList.push(10); // changes in both arrays

console.log(gradesList);
console.log(newGradesList);

// spread operators

// const newGradesListOfc =[...gradesList];

// newGradesListOfc.push(9.7); // changes only in the new

const newGradesListOfc =[...gradesList, 9.7];

console.log(newGradesListOfc);