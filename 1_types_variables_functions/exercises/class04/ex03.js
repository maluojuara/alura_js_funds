// 03. Create a function that takes a string and checks whether it is a palindrome (a word that is read the same way backwards) using the reverse() string method. Return true if it is a palindrome and false otherwise. Print the result to the console.


function checkPalindrome(word){
    const reverseWord = word.split('').reverse().join('');;
    if (word === reverseWord){
        return true
    }
    return false;
}

const word = "arara";
let result = (checkPalindrome(word) === true) ? "it's a palindrome" : "not a palindrome";

console.log(result);

