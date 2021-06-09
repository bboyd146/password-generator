// Assignment Code
const generateBtn = document.querySelector("#generate");


// Add password characters
const numbersChars = ["0","1","2","3","4","5","6","7","8","9"];
const lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specChars = ["!","#","$","%","&","'","\"","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","\[","\]","^","_","`","{","|","}","~"]
const allChars = numbersChars + lowerChars + upperChars + specChars;
// var userChoices = [];
// console.log (userChoices);


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
// Writes code to create password from selected prompts
function generatePassword() {
  
  userChoices = [];
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
  if(confirm("Include numerical characters?")) {
    userChoices = userChoices.concat(numbersChars);
  }
  
  // prompts for lowercase characters
  if(confirm("Include lowercase characters?")) {
    userChoices = userChoices.concat(lowerChars);
  }
  // prompts for uppercase characters
  if(confirm("Include uppercase characters?")) {
    userChoices = userChoices.concat(upperChars);
  }
  // prompts for special characters
  if(confirm("Include special characters?")) {
    userChoices = userChoices.concat(specChars);
  }  
  // alert for no characters chosen
  if (userChoices == 0) {
    alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
  }
  

  var randomPassword = [];
  // Loop to generate final password from choices made.
  for (var i = 0; i < passLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
