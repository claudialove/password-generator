// page loads: ALERT introducing the user to the idea of picking password complexity criteria 

var engageUser = alert("Need a password generated?? You've come to the right place!! We'll start by asking you a series of questions to determine your Password Complexity Criteria!");

//var PROMPT for password length

var lengthChoice = prompt("a STANDARD password is 8 characters, a LONG password is 15 characters; Do you choose 8 or 15 for your character length, please input you selection!"); 
     
// var PROMPT for password complexity: lowercase included

var useLowerCase = prompt(" Would you like to use LOWERCASE letters in your password complexity? Please respond 'yes' or 'no': "); 

// var PROMPT for password complexity: uppercase included

var useUpperCase = prompt(" Would you like to use UPPERCASE letters in your password complexity? Please respond 'yes' or 'no': "); 

// var PROMPT for password complexity: special char included

var useSpecialChar = prompt(" Would you like to use SPECIAL CHARACTERS in your password complexity? Please respond 'yes' or 'no': "); 

//system sends: ALERT to the user to tell them to click the <generate password> button to get their randomly generated password

var clickButton = alert("Click the Generate Password button below to get a randomly generated password based on your criteria");

//user clicks <generate password button> - and system concatenates the following:
    //user input for lengthChoice returned above
    //user input for useLowerCase returned above
    //user input for useUpperCase returned above
    //user input for useSpecialChar returned above


 // Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);   

//system uses concatenated data to loops through the password character storage array and selects items which meet the criteria popping them off and pushing them into a password generating array 

var passwordCriteria = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '#', '$', '%', '&', '*', '+', '?, ', '@']

//selected array items go into the password generating array

// and a math funtion is applied to the password generating array to generate a random password