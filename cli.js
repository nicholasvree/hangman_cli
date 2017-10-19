//require the inquirer module and the word and game constructor mods.
var inquirer = require("inquirer");
var Word = require('./word.js')
var Game = require('./game.js')

//globa variables
var chosenWord;
var game;

//start game creates instances of the chosenWord and game and starts asking questions
function startGame(){
	chosenWord = new Word(); 
	game = new Game();
	askQuestion()
}

//cycles through if then logic depending on game status and runs appropriate actions
function askQuestion(){
	if(game.lettersCorrect < chosenWord.fullWord.length && game.numGuesses>0){
		roundRun();
	}
	else if(game.numGuesses <= 0)
	{
		loser();
	}
	else{
		winner();
	}
}

//set of logic for individual guess
function roundRun(){ 
	console.log(chosenWord.lettersDisplay)

	inquirer
	.prompt([{
      type: "input",
      message: "Pick a letter?",
      name: "guessedLetter"
    }])
    .then(function(inquirerResponse) {
    	var correctGuess = 0;
    	for(var i=0; i<chosenWord.fullWord.length; i++){
    		if (chosenWord.lettersArray[i].letter === inquirerResponse.guessedLetter){
    			chosenWord.updateLettersDisplay(i)
    			correctGuess++
    			game.lettersCorrect++
    		}
    	}
    	if(correctGuess>0){
    		console.log("CORRECT!")
    	}
    	else{
    		game.numGuesses--
    		console.log("INCORRECT")
    		console.log(game.numGuesses + " guesses remaining")
    	}
    	askQuestion()
    })	
}

//set of logic if you lose
function loser(){
		console.log("LOSER")
		chosenWord.endOfGame()
		console.log(chosenWord.lettersDisplay)
		anotherGame()
	}

//set of logic if you win
function winner(){
		console.log("WINNER")
	  	console.log(chosenWord.lettersDisplay)
	  	anotherGame()
}

//set of logic to as if you want to play another game and recursively start() if you do.
function anotherGame(){
	inquirer
	.prompt([{
      type: "input",
      message: "Play Another Game? y/n",
      name: "playAnother"
    }])
    .then(function(inquirerResponse){
    	if(inquirerResponse.playAnother	=== "y"){
    		startGame()
    	}
    })
}



startGame()

