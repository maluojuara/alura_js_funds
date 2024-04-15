if (1 > 0) {
    var student = 'Caroline';
    console.log(student);
}

student = 'Ana';
console.log(student);

// ----------------------------------------------
// Not the same variable (js creates with var automatically) -- local scope
// Let is not avaiable outside of the block

if (1 > 0) {
    let student_a = 'Caroline';
    console.log(student_a);
}

student_a = 'Ana';
console.log(student_a);

// Scope - block, function and global 