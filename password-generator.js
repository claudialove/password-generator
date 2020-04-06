


    //user PROMPT for desired length (come in from prompt as a string)
    var passwordLength = prompt("PASSWORD LENGTH: pick a number from 8-128 for required password length: ");
    console.log(passwordLength);

    //user PROMPT for user selected character type, comes in from prompt as a string
    var passwordChar = prompt("PASSWORD CHARACTER: pick a character type: special, numeric, uppercase, lowercase ");
    console.log(passwordChar);

    //CONVERT string from passwordLength into an integer
    var passwordLength;
    var requiredLength = parseInt(passwordLength);
    console.log(requiredLength);

    //DECLARE FUNCTION 
    function generateRandomPassword() {
        //USE IF/ELSE to do evaluation of stored values
        var useChar = "";
        if (passwordChar === "lowercase") {
            useChar = "abcdefghijklmnopqrstuvwxyz";
        } else if (passwordChar === "uppercase") {
            useChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else if (passwordChar === "numeric") {
            useChar = "0123456789";
        } else if (passwordChar === "special") {
            useChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }
        console.log(useChar);

        //EMPTY STRING
        var randomPassword = "";
        //FOR LOOP on required length of password
        for (var i = 0; i < requiredLength; i++) {
            //picks a character within charSet at index of random number
            randomPassword += useChar.charAt(Math.floor(Math.random() * useChar.length));
        }
        return randomPassword;
    }
    alert(generateRandomPassword());



// generateBtn.addEventListener("click", writePassword);   

/*var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());*/