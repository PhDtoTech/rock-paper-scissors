const playerScore = document.querySelector('#playerScore');

const computerScore = document.querySelector('#computerScore');

window.onload = (event) => {
    playerScore.innerHTML = playScore;
    computerScore.textContent = compScore;
  };

let playScore = 0;

let compScore = 0;

let playerSelection;

let computerSelection = computerPlay();

const rock = document.querySelector('#rock');

const paper = document.querySelector('#paper');

const scissors = document.querySelector('#scissors');

const playerChoice = document.querySelector('#playerChoice');

const computerChoice = document.querySelector('#computerChoice');

playerScore.textContent = playScore;

computerScore.textContent = compScore;

function computerPlay () {
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
      }
    const rps=["Rock", "Paper", "Scissors"];
    return rps[getRandomInt()];
    }



function playRound(playerSelection, computerSelection) {

    if (playScore<5 && compScore<5){
        if ((playerSelection==="Rock" && computerSelection==="Scissors") ||
        (playerSelection==="Scissors" && computerSelection==="Paper") ||
        (playerSelection==="Paper" && computerSelection==="Rock") ) {
            playScore++;
        }
    else if ((playerSelection==="Scissors" && computerSelection==="Rock") ||
            (playerSelection==="Paper" && computerSelection==="Scissors") ||
            (playerSelection==="Rock" && computerSelection==="Paper") ) {
                compScore++;
            }
    }
    else if (playScore==5 || compScore==5){

        playScore=0;
        compScore=0;

        if ((playerSelection==="Rock" && computerSelection==="Scissors") ||
            (playerSelection==="Scissors" && computerSelection==="Paper") ||
            (playerSelection==="Paper" && computerSelection==="Rock") ) {
                playScore++;
        }
        else if ((playerSelection==="Scissors" && computerSelection==="Rock") ||
                (playerSelection==="Paper" && computerSelection==="Scissors") ||
                (playerSelection==="Rock" && computerSelection==="Paper") ) {
                    compScore++;
            }
    }
}

rock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    playerScore.textContent = playScore;
    computerScore.textContent = compScore;
    if (playScore==5) {
        alert ("You won!");
    }
    else if (compScore==5){
        alert ("The computer won! T R Y  A G A I N.");
    }
});

paper.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    playerScore.textContent = playScore;
    computerScore.textContent = compScore;
    if (playScore==5) {
        alert ("You won!");
    }
    else if (compScore==5){
        alert ("The computer won! T R Y  A G A I N.");
    }
    
});

scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    playerScore.textContent = playScore;
    computerScore.textContent = compScore;
    if (playScore==5) {
        alert ("You won!");
    }
    else if (compScore==5){
        alert ("The computer won! T R Y  A G A I N.");
    }
  
});