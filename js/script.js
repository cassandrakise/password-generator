// Assignment Code

// Character possibilities and possible password values
var pwLength = "";
var numberChar = "1234567890";
var lowerChar = "abcdefghijklmnopqrstuvwyxz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
var optionsChar = "";
var specialChar = "!@#$%^&*()_+~`=-;?/";

var passwordText = function(){
  // begin questions
  
}

// setting length of password


// what characters are used in password

function options(){
  pwLength = prompt("Your password must be a length between 8 and 128 characters: ");
    if (pwLength < 8 || pwLength > 128){
      alert("Your password must be between 8 and 128 characters");
    
    } else if (pwLength >= 8 || pwLength <= 128){
    
  }
  
var okNumbercase = confirm("Do you want to use numbers?");
if (okNumbercase === true){
  optionsChar += numberChar
}
var okLowercase = confirm("Do you want to use lowercase characters?");
if (okLowercase === true){
  optionsChar += lowerChar 
}
var okUppercase = confirm("Do you want to use uppercase characters?");
if (okUppercase === true){
  optionsChar += upperChar
}
var okSpecialcase = confirm("Do you want to use special characters?");
if (okSpecialcase === true){
  optionsChar += specialChar
} 

console.log(optionsChar);
}

function generatePassword(){ // takes final value from return of pwValue
  var pwValue = "";
  options();
  console.log(pwLength);
  console.log(optionsChar);
    for (var i = 0; i < pwLength; ++i){
      pwValue += optionsChar.charAt(Math.floor(Math.random() * optionsChar.length))
      console.log(i);
}

console.log(pwValue);
 return pwValue;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //call passwordOptions here until you create the generatePassword function
  // passwordOptions()
  var password = generatePassword(); // pulls final value from pwValue
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // ties finaly value with event listener of generate