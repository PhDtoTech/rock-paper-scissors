function computerPlay () {
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
      }
    //console.log (getRandomInt())

    const rps=["Rock", "Paper", "Scissors"];

    return rps[getRandomInt()];

}

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
    console.log(playerSelection)
  }
   
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));