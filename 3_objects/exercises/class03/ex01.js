// 01. Create an object called person that represents information about a person. The object should have the following properties: name and grades. Add a method called calculateAverageGrades to the person object. This method should calculate the average of the person's grades.

// Add a method called classifyPerformance to the person object. This method should return a performance category based on the calculated average. Use the following categories:

// Excellent performance: average >= 9
// Good performance: 7.5 <= average between 7.6 and 8.9
// Regular performance: 6 <= average between 6 and 7.5
// Insufficient performance: average < 6

const person = {
    name: 'Joaquina',
    grades: [8, 9, 10, 5],

    calculateAverageGrades: function() {
        let sum = 0;
        this.grades.forEach(grade => sum += grade);
        return (sum / this.grades.length).toFixed(2);
    },

    classifyPerformance: function() {
       const averageGrade = this.calculateAverageGrades();

       if (averageGrade >= 9) {
        return 'Excellent performance'
       }
       else if (averageGrade >= 7.5) {
        return 'Good performance'
       }
       else if (averageGrade >= 6){
        return 'Regular performance'
       }
       else{
        return 'Insufficient performance'
       }
    }
}

// Call the method calculateAverageGrades to calculate the average grades of the person and print the calculated average to the console.

console.log(`${person.name}'s average grade is ${person.calculateAverageGrades()}`);

// Call the method classifyPerformance and print the performance category of the person to the console.

console.log(`This is a ${person.classifyPerformance()}`);
