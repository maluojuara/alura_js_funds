const listStudents = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const class1 = listStudents.slice(0, listStudents.length/2); // end excluded

const class2 = listStudents.slice(listStudents.length/2); 

console.log(class1);
console.log(class2);