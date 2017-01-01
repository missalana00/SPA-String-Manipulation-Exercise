
// INSTRUCTIONS:

// 1. Copy the code below into the JavaScript file
// 2. In your HTML, create a text input and a button.

// 3. The text input should only accept letters. No numbers.

// 4. Implement the logic in the reversal function
// that reverses the order of the characters in the
// string, and outputs the result in the DOM,
// below the text input.

// 5. Implement the logic in the alphabits function
// that return the characters in alphabetical order,
// and outputs the result in the DOM,
// below the text input.

// 6. Implement the logic in the palindrome function
// that determine whether the string is a palindrome.
// If it is, display the text
// "Your string is a palidrome" in the DOM,
// below the text input.

// 7. When the user presses the enter key in the text
// input, or clicks the button, set the value of
// the testString variable (see below) to the value
// of the input.

// 8. The output of each of the functions should
// immediately appear as well.


/* ================================= */
/* ====== By Alana Smith ======== */
/* ================================= */



console.log("Begin."); //**** Message


/* +++++++++ DEV TOOL ++++++++++++++ */
// document.querySelector("body").addEventListener("click", function(e) {
//   console.log(e);
// });
/* +++ REMOVE BEFORE PRODUCTION ++++ */



/* ================================= */
/* ====== Global Variabless ======== */
/* ================================= */

var userInputString = document.getElementById("textInput");
var goButton = document.getElementById("Go");
var placeholderStringObj = "";



/* ================================= */
/* ====== Listeners ================ */
/* ================================= */



goButton.addEventListener("click", getString);

userInputString.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
    getString();

    }
});


//
/* ================================= */
/* ====== Get Value of Input ======= */
/* ================================= */

function getString () {
    if (userInputString.value) {
        alert("We've got your string. Now, let us work some magic!");

        placeholderStringObj = { string: userInputString.value };

        // console.log(placeholderStringObj);

        reverseText(placeholderStringObj);
        alphaText(placeholderStringObj);
        isPalindromeQ(placeholderStringObj);


    } else {
        alert("You've got to give us a string first!");
    }
}


/* ================================= */
/* ====== Reversal ================= */
/* ================================= */

function reverseText (object) {

//  var reverseTextOutput is set to hold the user's string as an array and split it on character
    var reverseTextOutput = object.string.split("");

//  Here we are performing the reverse method on reverseTextOutput ,
//  which manipulates that array so that reverseTextOutput is now holding (ex: "o", "l", "l", "e", "h")
// (reverse() doesn't return a new array, it manipulates the exisiting one.)

    reverseTextOutput.reverse();

// However, the join() method does return a new array, so you have to create a new variable to hold it
    var finalReversedString = reverseTextOutput.join("");

    var insertReversedText = document.getElementById("reversedTextHere");

    insertReversedText.innerHTML = finalReversedString
};



/* ================================= */
/* ====== Alphabits ================ */
/* ================================= */

function alphaText (object) {

    var alphaTextOutput = object.string.split("");

    alphaTextOutput.sort();

    var finalAlphaString = alphaTextOutput.join("");

    var insertAlphaText = document.getElementById("alphaTextHere");

    insertAlphaText.innerHTML = finalAlphaString

};


/* ================================= */
/* ====== Palindrome =============== */
/* ================================= */

function isPalindromeQ(object) {

    var isPalindromeQOutput = object.string.split("").reverse().join("");

    var originalInputSplit = object.string.split("").join("");

    if (originalInputSplit === isPalindromeQOutput) {
        console.log("You entered a palindrome!");
    } else {
        console.log("Your word or phrase is not a palindrome.");
    }

    console.log(originalInputSplit);
    console.log(isPalindromeQOutput);
  }


// END
