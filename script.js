
// Assignment Code
//variables
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!#[]$%&'()*+,-./:;<=>?@^`{|}~]"
var numChar = "0123456789";
var possibleCharacters = "";
var password = "";
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  characterAmount = prompt("Enter the length of characters for your password. Choose between 8 and 128 characters.");
  if (characterAmount < 8) {
    alert("Choose between 8 to 128 characters");
    return writePassword();
  }
  else if (characterAmount > 128) {
    alert("Choose between 8 to 128 characters");
    return writePassword();
  }
  //confirms
  var includeUppercase = confirm("Would you like to use uppercase Letters?");

  var includeLowercase = confirm("Would you like to use lowercase letters?");

  var includeNumbers = confirm("Would you like to use special characters?");

  var includeSymbols = confirm("Would you like to use numbers?");
  
  //Chooses characters 
  if (includeUppercase) {
    possibleCharacters += upperChar;
  }
  
  if (includeLowercase) {
    possibleCharacters += lowerChar;
  }
  
  if (includeNumbers) {
    possibleCharacters += numChar;
  }

  if (includeSymbols) {
    possibleCharacters += symbols;
  }
  
  //Final loop
  for (var i = 0; i < characterAmount; i++) {
  password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
