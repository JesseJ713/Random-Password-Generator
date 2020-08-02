// Assignment Code

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

  var password = [];
  specInput();
  numInput();
  lowerCasedInput();
  upperCasedInput();
  password.concat(password);


// Confirming Special Characters
function specInput() {
  if (confirm("Do you want special characters?")) {
    password.push(...specialCharacters);
  }
  else {
    console.log("No special characters");
  }
  console.log(password);
  return password;
}

// Confirming Numeric Characters
function numInput() {
  if (confirm("Do you want numeric characters?")) {
    password.push(...numericCharacters);
  }
  else {
    console.log("No numeric characters");
  }
  console.log(password);
  return password;
}

// Confirming Lower Cased Characters
function lowerCasedInput() {
  if (confirm("Do you want lower-cased characters?")) {
    password.push(...lowerCasedCharacters);
  }
  else {
    console.log("No lower-cased characters");
  }
  console.log(password);
  return password;
}

// Confirming Upper Cased Characters
function upperCasedInput() {
  if (confirm("Do you want upper-cased characters?")) {
    password.push(...upperCasedCharacters);
  }
  else {
    console.log("No upper-cased characters");
  }
  console.log(password);
  return password;
}

}

 //  Creating password to user's inputs
 // function generatePassword() {

 //  var password = [];

  //  var userData = specInput()

  //  if (userData) {
  //    password.push(specialCharacters)
  //  }
  //  else {
  //    console.log("No specialCharacters")
  //  }
  //  return password.join("  ");
  //  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
