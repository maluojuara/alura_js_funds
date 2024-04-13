const finalGrade = 6;
const absences = 0;
const warnings = 0;

if (finalGrade < 7 || absences > 4) {
    console.log("unfortunately, you failed! see you next year");
}

else {
    console.log("you didn't fail");
}


if (finalGrade < 7 && absences > 4) {
    console.log("unfortunately, you failed! see you next year");
}

else {
    console.log("you didn't fail");
}

if (absences <= 2 && !warnings){
    console.log("You received a bonus at your grade, congratulations!");
}
else{
    console.log("I'm sorry, you didn't receive a bonus.");
}