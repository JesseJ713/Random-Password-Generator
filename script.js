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
  while (userLength < 8 || userLength > 128 || userLength === NaN || userLength === null || userLength === undefined || Number.isNaN(userLength)) {
    userLength = parseInt(prompt("Please choose between 8 and 128 characters for optimal password generation."));

  }
  // console.log(userLength + " is the length chosen");


// Storing values of arrays into single array if declared true
if (specInput == true) {
  mainArray.push(...specialCharacters);
}
if (numInput == true) {
  mainArray.push(...numericCharacters);
}
if (lowerCasedInput == true) {
  mainArray.push(...lowerCasedCharacters);
}
if (upperCasedInput == true) {
  mainArray.push(...upperCasedCharacters);
}
// console.log(mainArray);


// Looping for length of password and adding a random character each time

 for (let i = 0; i < userLength; i++) {

  var randomCharacter = mainArray[Math.floor(Math.random() * mainArray.length)];
  // console.log(randomCharacter);
  password += randomCharacter;
  // console.log(password);

 }
 return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
