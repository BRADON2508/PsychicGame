// var userChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
var input = document.createElement("INPUT");
input.setAttribute("type", "number");
var userGuess = document.getElementById("input");

var computerChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

var correct = 0;
var wrong = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerGuess =document.getElementById("computerGuess-text");
var correctText = document.getElementById("correct-text");
var wrongText = document.getElementById("wrong-text");

document.onkeyup = function(event) {
    var userChoice = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}

if (userGuess === computerGuess) {
    correct++;
} else if (userGuess == computerGuess) {
    wrong++;
}



userChoiceText.textContent = "You guessed: " + userGuess;
computerChoiceText.textContent = "The Computer chose: " + computerGuess;
correctText.textContent = "You Win!!! You have won: " + correct;
wrongText.textContent = "You failed to guess the number. You have lost: " + wrong;
