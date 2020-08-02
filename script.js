// Assignment Code

// Initial Array to be modified
var mainArray = [];

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //Declaring password as a string
  var password = "";

  //Asking the User for what kind of character inputs they desire
  var specInput = confirm("Would you like Special Characters in your password?");
  var numInput = confirm("Would you like Numeric Characters in your password?");
  var lowerCasedInput = confirm("Would you like Lower-Cased Characters in your password?");
  var upperCasedInput = confirm("Would you like Upper-Cased Characters in your password?");

  //If ALL Variables are False, User is Asked to Try Again
  while ( specInput == false && numInput == false && lowerCasedInput == false && upperCasedInput == false) {
    alert ("You must select at least ONE criteria");
    specInput = confirm("Would you like Special Characters in your password?");
    numInput = confirm("Would you like Numeric Characters in your password?");
    lowerCasedInput = confirm("Would you like Lower-Cased Characters in your password?");
    upperCasedInput = confirm("Would you like Upper-Cased Characters in your password?");
  }

  //Asking the user the length of the password (between 8 and 128 characters)
  var userLength = parseInt(prompt("How long of a password would you like to generate? Please choose between 8 and 128 characters."));

  //Establishing character validation
  while (userLength < 8 || userLength > 128 || userLength === NaN || userLength === null || userLength === undefined || typeof(userLength) != "number") {
    userLength = parseInt(prompt("Please choose between 8 and 128 characters for optimal password generated."));

  }


// Storing values of arrays if declared true
if (specInput == true) {
  mainArray.push(specialCharacters);
}
if (numInput == true) {
  mainArray.push(numericCharacters);
}
if (lowerCasedInput == true) {
  mainArray.push(lowerCasedCharacters);
}
if (upperCasedInput == true) {
  mainArray.push(upperCasedCharacters);
}
console.log(mainArray);

}

// function generatePassword() {

//   var userInput = [];
//   var password = [];
//   specInput();
//   numInput();
//   lowerCasedInput();
//   upperCasedInput();

// // Confirming Special Characters
// function specInput() {
//   if (confirm("Do you want special characters?")) {
//     userInput.push(...specialCharacters);
//   }
//   else {
//     console.log("No special characters");
//   }
//   console.log(userInput);
//   return userInput;
// }

// // Confirming Numeric Characters
// function numInput() {
//   if (confirm("Do you want numeric characters?")) {
//     userInput.push(...numericCharacters);
//   }
//   else {
//     console.log("No numeric characters");
//   }
//   console.log(userInput);
//   return userInput;
// }

// // Confirming Lower Cased Characters
// function lowerCasedInput() {
//   if (confirm("Do you want lower-cased characters?")) {
//     userInput.push(...lowerCasedCharacters);
//   }
//   else {
//     console.log("No lower-cased characters");
//   }
//   console.log(userInput);
//   return userInput;
// }

// // Confirming Upper Cased Characters
// function upperCasedInput() {
//   if (confirm("Do you want upper-cased characters?")) {
//     userInput.push(...upperCasedCharacters);
//   }
//   else {
//     console.log("No upper-cased characters");
//   }
//   console.log(userInput);
//   return userInput;
// }

// // Confirming Character Length of the Password
//   var userLength = parseInt(prompt("How many characters would you like to have in your password between 8 and 128?"), 10);
//   console.log(userLength + " characters long");

//   //Randomly Selecting the Characters for the Password
//   password = userLength[Math.floor(Math.random() * userInput.length)];
//   console.log(password);
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
