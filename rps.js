function computerPlay () {
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
      }
    //console.log (getRandomInt())

    const rps=["Rock", "Paper", "Scissors"];

    return rps[getRandomInt()];

}

