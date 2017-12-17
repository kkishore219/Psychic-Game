
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var userGuessed = [];

document.onkeyup = function(event) {
var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var key = event.key.toLowerCase();

	if(userGuess === computerGuess) {
		wins++;
		guessesLeft = 9;
		string = [];
		userGuessed.length = 0;
	}

	else {
		guessesLeft--;
		userGuessed.push(key);
		var string = userGuessed.join(',');
	}	

	if (guessesLeft === 0) {

		losses++;
		guessesLeft = 9;
		string = [];
		userGuessed.length = 0;
		
		}

	var html=
		"<p>Wins:" + wins + "</p>" +
		"<p>Losses:" + losses + "</p>" +
		"<p>Number of guesses left:" + guessesLeft + "</p>" +
		"<p>Guesses:" + string + "</p>";

		document.querySelector("#game").innerHTML = html;
};
