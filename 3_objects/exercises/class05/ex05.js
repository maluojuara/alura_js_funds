// 05. Create an array of JavaScript objects representing fictional department information. Each object should contain at least the following properties:

// id (number): department identifier.
// nome (string): department name.
// funcionarios (array): array of objects representing department employees.

const departments = [
    {
        id: 1,
        name: "Sales",
        employees: [
            { id: 101, name: "Ana", position: "Sales Representative" },
            { id: 102, name: "Carlos", position: "Sales Manager" }
        ]
    },
    {
        id: 2,
        name: "IT",
        employees: [
            { id: 201, name: "Maria", position: "Developer" },
            { id: 202, name: "João", position: "Systems Analyst" }
        ]
    }
]

// Create a function called findEmployeeById that takes the id of an employee and returns the corresponding employee object in any department.

// Use the function to find an employee with an existing id and print the information of the found employee to the console. Then, use the function to find an employee with a non-existent id and print a message to the console indicating that the employee was not found.

function findEmployeeById (id) {
    for (const department of departments) {
        for (const employee of department.employees) {
            if (employee.id === id) 
                return employee;
        }
    }
    return "employee not found"
}

console.log(findEmployeeById(289)); // employee not found
console.log(findEmployeeById(201)); // { id: 201, name: 'Maria', position: 'Developer'}