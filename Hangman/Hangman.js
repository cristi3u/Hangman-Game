let lives = 7;
const wrongLetter = [];
const theNormalWord = [];
const theEditedWord = [];
document.getElementById('livesLeft').innerHTML = "Lives left : " + lives;

function addTheWord() {
    let word = document.getElementById('addID').value;
    let wordLength = word.length;
    for (let i = 0; i < wordLength; ++i) {
	theNormalWord.push(word[i]);
	theEditedWord.push(word[i]);
    }
    for (let i = 1; i < wordLength - 1; ++i) {
	theEditedWord[i] = '_';
    }
    document.getElementById('hangmanWord').innerHTML = theEditedWord.join(' ');
    document.getElementById('addButtonID').disabled = true;
}

function verifyTheWord() {
    let letter = document.getElementById('searchID').value;
    let theNormalWordLength = theNormalWord.length;
    let wrongLettersCounter = 0;
    let goodGameCounter = 0;
    for (let i = 1; i < theNormalWordLength - 1; ++i) {
	if (letter == theNormalWord[i]) {
	    theEditedWord[i] = letter;
	    document.getElementById('hangmanWord').innerHTML = theEditedWord.join(' ');
	} else {
	    ++wrongLettersCounter;
	}
    }
    for (let i = 1; i < theNormalWordLength - 1; ++i) {
	if (theEditedWord[i] != '_') {
	    ++goodGameCounter;
	}
    }
    if (goodGameCounter == theNormalWordLength - 2) {
	document.getElementById('finalResult').innerHTML = "CONGRATULATION YOU HAVE WON!";
    }
    if (wrongLettersCounter == theNormalWordLength - 2) {
	--lives;
	document.getElementById('livesLeft').innerHTML = "Lives left : " + lives;
	let list = document.getElementById("wrongLettersId");
	wrongLetter.push(letter);
	let li = document.createElement("li");
	li.innerText = letter;
	list.appendChild(li);
    }
    if (lives == 0) {
	document.getElementById('finalResult').innerHTML = "GAME OVER, THE WORD WAS : " + theNormalWord.join('');
    }
}
