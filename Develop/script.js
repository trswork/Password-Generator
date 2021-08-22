// Assignment code here

var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alpha = "abcdefghijklmnopqrstuvwxyz";
var Num = "0123456789";
var Sym = "!@#$%^&*=-_";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var length;
var caps;
var alpha;
var special;
var numeric;


// Write password to the #password input
function writePassword() {
  
    var password = generatePassword(''); 
    function generatePassword(length) {
        var alpha = "abcdefghijklmnopqrstuvwxyz";
        var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numeric = "0123456789";
        var special = "!@#$%^&*=-_";
    
        var options = [alpha, caps, numeric, special];
    
        var password = "";
        var passwordArray = Array(length);
    
        for (i = 0; i < length; i++) {
            var currentOption = options[Math.floor(Math.random() * options.length)];
            var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
            password += randomChar;
            passwordArray.push(randomChar);
        }
    
        checkPassword();
    
        function checkPassword() {
            var missingValueArray = [];
            var containsAll = true;
    
            options.forEach(function (e, i, a) {
                var hasValue = false;
                passwordArray.forEach(function (e1, i1, a1) {
                    if (e.indexOf(e1) > -1) {
                        hasValue = true;
                    }
                });
    
                if (!hasValue) {
                    missingValueArray = a;
                    containsAll = false;
                }
            });
    
            if (!containsAll) {
                passwordArray[Math.floor(Math.random() * passwordArray.length)] = missingValueArray.charAt(Math.floor(Math.random() * missingValueArray.length));
                password = "";
                passwordArray.forEach(function (e, i, a) {
                    password += e;
                });
                checkPassword();
            }
        }
    
    return password;
}
    
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
var PasswordLength = prompt ("Password Length: select between 8 and 128");
        console.log("Password Length" + PasswordLength);

        if(!PasswordLength) {
            alert("Required Field");
        } else if (PasswordLength < 8  || PasswordLength > 128){
            PasswordLength = prompt("Must have between 8 and 128");
        }
       
        var caps = confirm("Are you including uppercase letters?");
        console.log("Upper Case " + caps);

        var alpha = confirm("Are you including lowercase letters?");
        console.log("Lower Case " + alpha);

        var special = confirm("Are you including symbols?");
        console.log("symbol " + special);

        var numeric = confirm("Are you including numbers?");
        console.log("number " + numeric);

            
        

