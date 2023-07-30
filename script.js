window.addEventListener('load', init);
// available levels

const levels = {
    easy:5,
    medium:3,
    hard:2
};
// To change level
const currentLevel = levels.easy;
console.log(currentLevel)

// Global variables
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput  = document.querySelector('#word-input')
const currentWord  = document.querySelector('#current-word')
const scoreDisplay  = document.querySelector('#score')
const timeDisplay  = document.querySelector('#time')
const  message = document.querySelector('#message')
const seconds  = document.querySelector('#seconds')



const words = [
    'hat',
    'Cutlass',
    'Microphone',
    'telephone',
    'breakdown',
    'speechless',
]

//initialize game

function init(){
    
//    To show level in UI

seconds.innerHTML = currentLevel;
    // load word from words array
    showWord(words)

    // start mathing on wrd input
    wordInput.addEventListener('input', startMatch)

    // call countdown every second
    setInterval(countdown, 1000);

    // check game status

    setInterval(checkStatus, 50)
}

// start Match

function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
       
    }

    // if score == -1 , show o

    if(score ===-1){
        scoreDisplay.innerHTML = 0;
    } else{
        scoreDisplay.innerHTML = score
    }


    
}

// match current word to word inpuy

function matchWords(){

    if(wordInput.value === currentWord.innerHTML){

        message.innerHTML = 'Correct !!!';
        return true;

    } else{
        message.innerHTML = '';
        return false;
    }


}

// show random word

function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    // Display random word

    currentWord.innerHTML = words[randIndex];

}

// countdown timer

function countdown(){

      //check if time is not run out
      if(time>0){
        //Decrement
        time--;
      }

      else if(time === 0){
        //Game is over

        isPlaying = false
      }

      timeDisplay.innerHTML = time

}
  

// check game status

function checkStatus(){
    if(!isPlaying && time === 0 ){
        message.innerHTML = 'Game Over !!!';

        // if(message.innerHTML = 'Game Over !!!'){
        //     message.style.color = 'Red';
        // } else{
        //     message.style.color = 'Black';
        // }
        score = -1;
    }
}


