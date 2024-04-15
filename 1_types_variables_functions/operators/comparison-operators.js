const isApproved = true;

if (isApproved === true){
    console.log("Approved student");
}

if ('0' == 0){ // returns true - compare only the value
    console.log("passed on comparation");
} else{
    console.log("didn't pass");
}


if ('0' === 0){ // returns false - compare the data type (number vs string)
    console.log("passed on comparation");
} else{
    console.log("didn't pass");
}



const minimumAge = 18;
const studentAge = 16;

if (studentAge >= minimumAge){
    console.log("doesn't need an authorization");
}
else{
    console.log("needs an authorization");
}

// ternary operator

studentAge >= minimumAge ? console.log("doesn't need an authorization") : console.log("needs an authorization");