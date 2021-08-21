// Assignment code here
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomsymbol
};


  function getRandomLower(){
    var confirmLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    return confirmLowerCase[Math.floor(Math.random() * lower.length)];
}
function getRandomUpper(){
    var confirmUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return confirmUpperCase[Math.floor(Math.random() * upper.length)];
}
function getRandomNumber(){
    var confirmNumber = '0123456789';
    return confirmNumber[Math.floor(Math.random() * number.length)]; 
}
function getRandomsymbol() {
    var confirmSymbol = '!@#$%^&*=-_';
    return symbol[Math.floor(Math.random() * symbols.length)];
}
 console.log()
   

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(length, upperCase, lowerCase, symbol, number) {
  var password = generatePassword();
  for(var i = 0; i < length; i++){
    password = generatePassword(Math.floor(Math.random() * Password.Length));

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    
}}
 
// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    length= + lengthEl.value;
    haslower= lowercaseEl;
    hasupper= uppercaseEl;
    hasnumber= numberEl;
    hassymbol= symbolEl;

    passwordEl = generatePassword(
        haslower,
        hasupper,
        hasnumber,
        hassymbol,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length) {

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ',typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (item => Object.values(item)[0]);

    console.log('typesArr ', typesArr);

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log('funcName: ',funcName);

            generatePassword += randomFunc[funcName] ();
        })
    }
    
    const password = generatePassword.slice(0, length);

    return password;

    };

var length = window.prompt ("Password Length: select between 8 and 12");
        console.log("Password Length" + length);

        if(!length) {
            alert("Required Field");
        } else if (length < 8  || length > 12){
            length = window.prompt("Must have between 8 and 12");
        }
       
        var upperCase = window.confirm("Are you including uppercase letters?");
        console.log("Upper Case " + upperCase);

        var lowerCase = window.confirm("Are you including lowercase letters?");
        console.log("Lower Case " + lowerCase);

        var symbol = window.confirm("Are you including symbols?");
        console.log("symbol " + symbol);

        var number = window.confirm("Are you including numbers?");
        console.log("number " + number);

            


        

