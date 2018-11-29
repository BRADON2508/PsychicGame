// var userChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

var userinput = document.getElementById("input");
var computerChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
var correct = 0;
var wrong = 0;
var userGuess;
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userGuess-text");
var computerGuessText = document.getElementById("computerGuess-text");
var correctText = document.getElementById("correct-text");
var wrongText = document.getElementById("wrong-text");
var button = document.querySelector("button");

document.onkeyup = function(event) {
    var userChoice = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// for (var i = 0; i < numbers.length; i++) {
    // var numberBtn = $("<button>");
    // numberBtn.addClass("number-button number number-button-color");
    // numberBtn.text(numbers[i]);
    // $("#buttons").append(numberBtn);
// }
button.onclick = function(event) {
    event.preventDefault();
    userGuess = input.value;
    input.value = "";
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // computerGuess = 3;
    console.log(userGuess);
    console.log(computerGuess);
    if (userGuess == computerGuess) {
        correct++;
        correctText.innerHTML = "Correct: " + correct;
        
    } else {
        wrong++;
        wrongText.innerHTML = "Wrong: " + wrong;
    }
userGuessText.innerHTML = "You guessed: " + userGuess;
computerGuessText.innerHTML = "The Computer chose: " + computerGuess;
// correctText.textContent = "You Win!!! You have won: " + correct;
// wrongText.textContent = "You failed to guess the number. You have lost: " + wrong;

}
