//require letter constructor 
Letter = require('./letter.js')

function Word(){
	// word list
	var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
     "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

    //pick word
	this.fullWord =  wordsList[Math.floor(Math.random() * wordsList.length)];
	//preparing a leters array
	this.lettersArray = []
	//prepariong a letters display
	this.lettersDisplay=""
	//setting the letters array and display with the word chosen from the word list
	 for(var i=0; i<this.fullWord.length; i++){
	 	this.lettersArray.push(new Letter(this.fullWord, i))
	 	this.lettersDisplay += "_ "
	 }
}

//reveals the letter in letter.status and recreates the letters display to be displayed to the user
Word.prototype.updateLettersDisplay = function(i){
	 	this.lettersArray[i].switch()
	 	this.lettersDisplay=""
	 	for(var i=0; i<this.fullWord.length; i++){
	 	 	this.lettersDisplay += this.lettersArray[i].status
	 	}
	 }

//at the end of game, regardless of win/lose, reveal all the letters so they know what the answer is
Word.prototype.endOfGame = function(){
	this.lettersDisplay=""
	 	for(var i=0; i<this.fullWord.length; i++){
	 	this.lettersArray[i].switch()
	 	this.lettersDisplay += this.lettersArray[i].status
	 	}
	}



 module.exports = Word

