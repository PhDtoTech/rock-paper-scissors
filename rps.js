//This is the function that allows the computer to randomly choose an option
  function computerPlay () {
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
      }
    const rps=["Rock", "Paper", "Scissors"];
    return rps[getRandomInt()];
}

let playScore = 0;
let compScore= 0;

function game () {
    
    for (let i = 0; i < 5; ) {
        
        //These are the variables for player Selection and computer Selection
        let playerSelection = prompt ("Rock, paper, or scissors?" ,);
        let computerSelection = computerPlay();
        
        console.log (i)

        playRound(playerSelection, computerSelection);
        
        i++

        console.log (i)

        console.log ("You chose " + playerSelection + ". The computer chose " + computerSelection + ". Your score is " + playScore + ". The computer score is " + compScore + "." )

        if (i==5) { 
            if (playScore>compScore) {
                console.log ("YOU WIN!")
            }
            else if (playScore==compScore) {
                console.log ("IT'S A TIE!")
            }
            else {console.log ("YOU LOSE!")}
        }

     }
  }


//This is the function to play a round of the game
function playRound(playerSelection, computerSelection) {

    if (playerSelection=="rock"|| playerSelection=="Rock"|| playerSelection=="ROck"|| playerSelection=="ROCk"||playerSelection=="ROCK"||playerSelection=="RocK"|| playerSelection=="rocK"|| playerSelection=="roCK") {
        playerSelection="Rock";
    }
    if (playerSelection=="scissors"|| playerSelection=="Scissors"|| playerSelection=="SCissors"|| playerSelection=="SCIssors"|| playerSelection=="SCISsors"|| playerSelection=="SCISSORS") {
        playerSelection="Scissors";
    }
    if (playerSelection=="paper"|| playerSelection=="Paper"|| playerSelection=="PAPer"|| playerSelection=="PAper"|| playerSelection=="PAPEr"|| playerSelection=="PAPER"){
        playerSelection="Paper";
    }
    if ((playerSelection==="Rock" && computerSelection==="Scissors") ||
        (playerSelection==="Scissors" && computerSelection==="Paper") ||
        (playerSelection==="Paper" && computerSelection==="Rock") ) {
            playScore++;
            console.log ("computer score is " + compScore)
            console.log ("player score is " + playScore)
            return "Win";
        }
    else if ((playerSelection==="Rock" && computerSelection==="Rock") ||
             (playerSelection==="Scissors" && computerSelection==="Scissors") ||
             (playerSelection==="Paper" && computerSelection==="Paper") ) {
            console.log ("computer score is " + compScore)
            console.log ("player score is " + playScore)
            return "Tie";

        }
    else if ((playerSelection==="Scissors" && computerSelection==="Rock") ||
    (playerSelection==="Paper" && computerSelection==="Scissors") ||
    (playerSelection==="Rock" && computerSelection==="Paper") ) {
        compScore++;
        console.log ("computer score is " + compScore)
        console.log ("player score is " + playScore)
        return "Lose"
  }
    else { return "There seems to be a problem. Try again."}
}