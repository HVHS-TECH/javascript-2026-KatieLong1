/****************************
This is a block comment.
Set up and display Variables
****************************/
console.log("Running t01_introduction.js");
console.log("We are learning JS");

/****Set up Variables*****/

let userName = 'Katie';
let userAge = 15;
let pocketMoney = 5;
let currentYear = 2025
let answer;

// Displaying message and maths equation 

console.log("Hi " + userName);
answer = currentYear - userAge;
console.log("As of " + currentYear + " you are " + userAge + " years old");
console.log("You were born in " + answer);
answer = userAge + 10;
console.log("In 10 years time you will be " + answer);
console.log("You have " + "$" + pocketMoney);
answer = pocketMoney/2;
console.log("You spend half of your money, now you have " + answer);
answer = pocketMoney + 3;
console.log("Then you get $3, now you have " + answer);
