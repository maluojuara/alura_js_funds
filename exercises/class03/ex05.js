// 05. Imagine a system that determines whether a user is old enough to buy a ticket for a concert. Declare two variables that determine the minimum age and the user's age, and use conditional structures (if, else) to determine if the user can make the purchase.

const minimumAge = 18;
const userAge = 19;

if (userAge >= minimumAge){
    console.log("you can go to the concert!");
}
else{
    console.log("sorry, you can't buy this ticket because you dont't have the minimum age");
}