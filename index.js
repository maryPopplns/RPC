function computerPlay() {
  let weapons = ["rock", "paper", "sissors"];
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
  let input = player.toLowerCase();
  // if (input !== 'rock' || input !== 'paper' || input !== 'sissors) {
  //   alert('refresh and use a correct input')
  // }
  if (player === computer) return "tie";
  return input === "rock" && computer === "sissors"
    ? "user wins"
    : "computer wins";
  return input === "paper" && computer === "rock"
    ? "user wins"
    : "computer wins";
  return input === "sissors" && computer === "paper"
    ? "user wins"
    : "computer wins";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let round = playRound(
      window.prompt("allowed inputs : rock, paper, sissors"),
      computerPlay()
    );
    console.log(round);
    if (round == "tie") continue;
    round == "user wins" ? playerScore++ : computerScore++;
    console.log(playerScore);
    console.log(computerScore);
  }
  if (playerScore == computerScore) {
    return alert("tie");
  }
  return playerScore > computerScore
    ? alert("You are the winner")
    : alert("You lose ;(");
}

// game();

let playButton = document.querySelector(".rules-button");
function hideRules(e) {
  document.querySelector(".rules-container").style.visibility = "hidden";
}
playButton.addEventListener("click", hideRules);
