const finalGrade = 6;
const absences = 5;

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