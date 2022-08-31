class Hangman {
  constructor() {
    this.words = ["IRONHACK", "NODEJS", "JAVASCRIPT", "METEOR", "ANGULAR"];
    this.letters = [];
    this.errorsLeft = 10;
    this.secretWord = this.getWord();
  }
  getWord() {
    let random = Math.floor(Math.random() * this.words.length);
    return this.words[random];
  }

  isFinished() {
    return this.secretWord == this.gameStatus().join('');
  }

  gameOver() {
    return this.errorsLeft <= 0;
  }

  askLetter(letter) {
    letter = letter.toUpperCase();
    if (this.letters.indexOf(letter) > -1) {
      return alert('u ask this letter ') ;
    }
    this.letters.push(letter);
    let correct = this.secretWord.indexOf(letter) > -1;
    if (!correct) {
      this.errorsLeft -= 1;
    }
    return correct;
  }

  gameStatus() {
    let that =this
    let wordStatus  = [];
    let splitWord = this.secretWord.split("");

    splitWord.forEach(function (letter) {
      if (that.letters.indexOf(letter) > -1) {
        wordStatus.push(letter);
      } else {
        wordStatus.push("_");
      }
    });
    return wordStatus;
  }

  getWordStatus() {
    if (this.isFinished()) {
        return "You Win";
      } else if (this.gameOver()) {
        return "Game Over";
      }
  }
}
