let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let weapons = ["rock", "paper", "sissors"];
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
  console.log(player);
  console.log(computer);
  if (player === computer) return "tie";

  if (
    (player === "rock" && computer === "sissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "sissors" && computer === "paper")
  ) {
    return "user wins";
  } else {
    return "computer wins";
  }
}

function game(e) {
  if (e.target.id === "rock") {
    scoreKeeper(playRound("rock", computerPlay()));
  }
  if (e.target.id === "paper") {
    scoreKeeper(playRound("paper", computerPlay()));
  }
  if (e.target.id === "sissors") {
    scoreKeeper(playRound("sissors", computerPlay()));
  }

  function scoreKeeper(result) {
    const roundResults = document.querySelector(".round-results");
    if (result === "tie") {
      roundResults.innerText = "Tie!";
    }
    if (result === "user wins") {
      playerScore++;
      roundResults.innerText = "Round Won";
      document.querySelector("#player-score").innerText = playerScore;
    }
    if (result === "computer wins") {
      computerScore++;
      roundResults.innerText = "Round Lost";
      document.querySelector("#computer-score").innerText = computerScore;
    }

    if (playerScore === 5) {
      roundResults.innerText = "Winner!";
    }

    if (computerScore === 5) {
      roundResults.innerText = "Loser!";
    }
  }
}

const playButton = document.querySelector(".rules-button");
function ruleHider(e) {
  const heading = document.querySelector("h1");
  const body = document.querySelector("body");
  const rules = document.querySelector(".rules-container");
  const anchor = document.querySelector("a");
  const division = document.querySelector("#header-division");
  const main = document.querySelector("main");

  heading.style.color = "#611212";
  heading.innerText = "FIGHT!";
  heading.style.animation = "textgrowth .5s infinite alternate";
  heading.style.fontFamily = "Permanent Marker, cursive";
  body.style.backgroundColor = "rgba(103, 29, 29, 0.25)";
  body.style.backgroundImage = 'url("src/holdup.png")';
  rules.style.visibility = "hidden";
  anchor.removeAttribute("href");
  division.style.backgroundColor = "#611212";
  main.style.visibility = "visible";
}
playButton.addEventListener("click", ruleHider);

const rock = document.querySelector("#rock");
rock.addEventListener("click", game);

const paper = document.querySelector("#paper");
paper.addEventListener("click", game);

const sissors = document.querySelector("#sissors");
sissors.addEventListener("click", game);

const gun = document.querySelector("#gun");
gun.addEventListener("click", game);
