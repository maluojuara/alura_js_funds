// 04. You received two arrays of names containing students from Class A and Class B.

const namesClassA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const namesClassB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];
  
// Use the concat() method to join the arrays of classes A and B into a single array called allStudents. Then, use the find() method to search for a specific student by name in the allStudents array. Display a message on the console informing the name of the student being sought; if it does not exist in the list, return a warning message, for example Student not found.

const allStudents = namesClassA.concat(namesClassB);

const student = allStudents.find(name => name === "Ana Souza da Silva");

const message = student ? `Student found: ${student}` : "Student not found";

console.log(message);