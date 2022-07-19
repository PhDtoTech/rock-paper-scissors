//This is the function that allows the computer to randomly choose an option
  function computerPlay () {
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
      }
    const rps=["Rock", "Paper", "Scissors"];
    return rps[getRandomInt()];
}
  //These are the variables for playerSelection and computerSelection
  let playerSelection = prompt ("Rock, paper, or scissors?" ,)
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

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
            return "You win";
        }
    else if ((playerSelection==="Rock" && computerSelection==="Rock") ||
             (playerSelection==="Scissors" && computerSelection==="Scissors") ||
             (playerSelection==="Paper" && computerSelection==="Paper") ) {
            return "Tie";
        }
    else if ((playerSelection==="Scissors" && computerSelection==="Rock") ||
    (playerSelection==="Paper" && computerSelection==="Scissors") ||
    (playerSelection==="Rock" && computerSelection==="Paper") ) {
         return "You lose"; 
  }
    else { return "There seems to be a problem. Try again."}
}


  /*function game () {
    for (let i = 0; i < 5; i++) {
        let playScore = 0
        let compScore= 0

        playRound()
     }
  }*/