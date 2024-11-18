



// const input = prompt("Enter a character")
// checkCharacterType(input);

// function checkCharacterType(input) {
//     if (input.length !== 1) {
//         console.log("Please enter a single character.");
//         return;
//     }

//     const charCode = input.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         console.log("The input is a number.");
//     } else if (charCode >= 65 && charCode <= 90) {
//         console.log("The input is an uppercase letter.");
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log("The input is a lowercase letter.");
//     } else {
//         console.log("The input is neither a number nor a letter.");
//     }
// }

// -------------------------------------------------------------------------------------------------------------------/ const input = prompt("Enter a character")
// const input1 = prompt("Enter a number")
// const input2 = prompt("Enter a  second number")
// if(input1>input2){
//     console.log(`${input1} is greater`);
// }
// else if(input1<input2){
//     console.log(`${input2} is greater`);
    
// }
// else{
//     console.log("Both are same");
    
// }
// -------------------------------------------------------------------------------------------------------------------/ const input = prompt("Enter a character")


// function checkNumberType() {
//     const input = prompt("Enter a number:");

//     const number = parseInt(input);

//     if (isNaN(number)) {
//         console.log("Invalid input. Please enter a valid number.");
//     } else if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// checkNumberType();
// -------------------------------------------------------------------------------------------------------------------/ const input = prompt("Enter a character")

// function isVowel(input) {

//     const lowerinput = input.toLowerCase();

//     if (lowerinput === "a" || lowerinput === "e" || lowerinput === "i" || lowerinput === "o" || lowerinput === "u") {
//         return true;
//     } else {
//         return false;
//     }
// }

// const input = prompt("Enter a character:");

// if (input.length === 1) {
//     console.log(isVowel(input));
// } else {
//     console.log("Please enter a single character.");
// }

// -------------------------------------------------------------------------------------------------------------------/ const input = prompt("Enter a character")

// const correctPassword = "QuratulAin123";

// const userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

// -------------------------------------------------------------------------------------------------------------------/ const input = prompt("Enter a character")

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting); 


// // -------------------------------------------------------------------------------------------------------------------/ const input = prompt("Enter a character")


// const time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));

// if (isNaN(time) || time < 0 || time > 2359) {
//     console.log("Invalid time format. Please enter a time between 0000 and 2359.");
// } else if (time >= 0 && time < 1200) {
//     console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     console.log("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     console.log("Good night!");
// }
