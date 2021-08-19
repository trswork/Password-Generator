// Assignment code here
function generate(){

}
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var symbol = '!@#$%^&*=-_';

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");



function password(l,characters){
    var pwd = '';
    for(var i = 0; i<l; i++){
        pwd += characters.characters(Math.floor(Math.random() * characters.length));
    }

    return pwd;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var PasswordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmSymbol;
var confirmNumber;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

    function generatePassword(){

        var PasswordLength = window.prompt ("password length: random between 8 and 12");
        console.log("password length" + passwordlength);

        if(PasswordLength) {
            alert("Required Field");
        } else (PasswordLength < 8  || PasswordLength > 12)
        {
            PasswordLength = window.prompt("Must have between 8 and 12");
        }

        var confirmUpperCase = window.confirm("Are you including uppercase letters?");
        console.log("Upper Case " + confirmUpperCase);

        var confirmLowerCase = window.confirm("Are you including lowercase letters?");
        console.log("Lower Case " + confirmLowerCase);

        var confirmSymbol = window.confirm("Are you including symbols?");
        console.log("symbol " + confirmSymbol);

        var confirmNumber = window.confirm("Are you including numbers?");
        console.log("number " + confirmNumber);
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);