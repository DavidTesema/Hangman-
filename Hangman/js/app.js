let hangman = new Hangman();
let currentWord = document.querySelector("#currentWord");
let game = document.querySelector("#game");
let hangmanContainer = document.querySelector("#hangman");
let input = document.querySelector("#id-input");
let letters = document.querySelector("#letters");
let youWin = document.querySelector("#you-win");
let gameOver = document.querySelector("#game-over");

function showData() {
    currentWord.innerHTML='';
    game.classList.remove("hide");
    let wordsHangman = hangman.gameStatus();
    wordsHangman.forEach((word) => {
    currentWord.innerHTML += /*html*/`<span>${word}</span>`;
  });
}

showData();
hangmanContainer.classList.add(`lifes-${hangman.errorsLeft}`)
input.addEventListener('keyup',function(e){
    if(e.which==13){
        if(input.value.split('').length>1){
            alert('')
        }
        hangman.askLetter(input.value.split('')[0]);
        showData();
        letters.innerHTML=hangman.letters;
        input.value='';
        if(hangman.getWordStatus()=='You Win'){
         youWin.classList.remove("hide");
        }
        if(hangman.getWordStatus()=='Game Over'){
         gameOver.classList.remove("hide");
        }
        hangmanContainer.classList.add(`lifes-${hangman.errorsLeft}`)
    }

})


function href(){
    window.location.reload();
}