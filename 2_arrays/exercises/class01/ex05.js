// 05. Develop a program in Node.js that simulates a veterinary clinic. Create an empty array called 'clinic' that represents the queue of animals at the clinic. Initially, simulate the arrival of three different animals and display the list of animals in the console. After displaying, remove the animals from the list one by one, and finally, display the final state of the list in the console

const clinic = [];

clinic.push("cat Lulu", "dog Toto", "rabbit Sabrina");

console.log(clinic);

clinic.pop();
clinic.pop();
clinic.pop();

console.log(clinic);