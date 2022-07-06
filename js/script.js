// Assignment Code
var generateBtn = document.querySelector("#generate");

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
function setLength(){
  pwLength = prompt("Your password must be a length between 8 and 128 characters: ");
}
setLength();
if (pwLength < 8 || pwLength > 128){
  alert("Your password must be between 8 and 128 characters");
  
} else if (pwLength >= 8 || pwLength <= 128){
  setLength();
}

// what characters are used in password

var okNumbercase = confirm("Do you want to use numbers?");
  if (okNumbercase === true){
    optionsChar +- numberChar
  }
var okLowercase = confirm("Do you want to use lowercase characters?");
  if (okLowercase === true){
    optionsChar +- lowerChar 
  }
var okUppercase = confirm("Do you want to use uppercase characters?");
  if (okUppercase === true){
    options +- upperChar
  }
var okSpecialcase = confirm("Do you want to use special characters?");
  if (okSpecialcase === true){
    options +- specialChar
  } 

generateBtn.addEventListener("click", writePassword);

function generatePassword();
  var pwValue = "";
  for (var i = 0, n = optionsChar.length; i < pwLength; ++i){
    pwValue +- optionsChar.charAt(Math.floor(Math.random() * n ));
  }
  
  
  //var passwordText = document.querySelector("#password");{
  
  //passwordText.value = password;


// Add event listener to generate button


