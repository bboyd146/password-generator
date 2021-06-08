// Assignment Code
const generateBtn = document.querySelector("#generate");


// Add password characters
const numbersChars = ["0","1","2","3","4","5","6","7","8","9"];
const lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specChars = ["!","#","$","%","&","'","\"","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","\[","\]","^","_","`","{","|","}","~"]
const allChars = numbersChars + lowerChars + upperChars + specChars;
var randomPassword = [];

function generateOptions() {
// Code for prompt series
// prompts for password length
const passLength = prompt("Length of password? Must choose between 8 and 128 Characters.");

// prompt alerts for incorrect values
if (passLength < 8) {
  alert('The password must be at least 8 characters!');
  return;
}
if (passLength > 128) {
  alert('The password must be less than 128 characters!')
  return;
}
// prompts for numerical characters
const wantNumbersChars = confirm("Include numerical characters?");

// prompts for lowercase characters
const wantLowerChars = confirm("Include lowercase characters?");
// prompts for uppercase characters
const wantUpperChars = confirm("Include uppercase characters?");
// prompts for special characters
const wantSpecChars = confirm("Include special characters?");

if (!wantLowerChars && !wantUpperChars && !wantNumbersChars && !wantSpecChars) {
  alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
  return;
}
// Makes variables for users choices
const questionOptions = {
  length: passLength,
  numeric: wantNumbersChars,
  lowerCase: wantLowerChars,
  upperCase: wantUpperChars,
  specialCharacters: wantSpecChars,
  allFour: allChars,
}

// return questionOptions;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
// Writes code to create password from selected prompts
function generatePassword() {
  const options = generateOptions();
  const passwordPicks = [];


  if (options.numeric) {
    for (i = 0; i < numbersChars.length; i++) {
        passwordPicks.push(numbersChars[i]);
    }
} 
if (options.lowerCase) {
    for (i = 0; i < lowerChars.length; i++) {
    passwordPicks.push(lowerChars[i]);
    }
}
if (options.upperCase) {
    for (i = 0; i < upperChars.length; i++) {
    passwordPicks.push(upperChars[i]);
    }
}
if (options.specialCharacters) {
    for (i = 0; i < specChars.length; i++) {
    passwordPicks.push(specChars[i]);
    }
}
if (options.allFour) {
  for (let i = 0; i < allChars.length; i++) {
    passwordPicks.push(allChars[i]);
    
  }
}

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
