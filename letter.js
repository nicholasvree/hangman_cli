function Letter(chosenWord, i){
	//designates the corresponsing leter
	this.letter = chosenWord[i]
	//puts in a _ to represent the hidden letter
	this.status = "_ "
}
//method to switches the underscore to reveal the letter
Letter.prototype.switch = function(){
		this.status = this.letter+" "
	}

module.exports = Letter;