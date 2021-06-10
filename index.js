let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let weapons = ["rock", "paper", "sissors"];
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
  if (player === computer) {
    return "tie";
  } else if (
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
  // if (e.target.id === "gun") {
  //   logic for the gun
  // }

  function scoreKeeper(result) {
    const roundResults = document.querySelector(".round-results");
    const resetBtn = document.querySelector("#reset-btn");
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const sissors = document.querySelector("#sissors");
    const gun = document.querySelector("#gun");
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

    if (playerScore === 5 || computerScore === 5) {
      rock.removeAttribute("id");
      paper.removeAttribute("id");
      sissors.removeAttribute("id");
      gun.removeAttribute("id");
    }

    if (playerScore === 5) {
      roundResults.innerText = "Winner!";
      resetBtn.style.visibility = "visible";
    }

    if (computerScore === 5) {
      roundResults.innerText = "Loser!";
      resetBtn.style.visibility = "visible";
    }
  }
}

const playButton = document.querySelector(".rules-button");
function ruleHider() {
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

function handlerAdder() {
  const weapons = [
    document.querySelector("#rock"),
    document.querySelector("#paper"),
    document.querySelector("#sissors"),
    document.querySelector("#gun"),
  ];
  weapons.forEach((e) => e.addEventListener("click", game));
}

handlerAdder();

// const rock = document.querySelector("#rock");
// rock.addEventListener("click", game);

// const paper = document.querySelector("#paper");
// paper.addEventListener("click", game);

// const sissors = document.querySelector("#sissors");
// sissors.addEventListener("click", game);

// const gun = document.querySelector("#gun");
// gun.addEventListener("click", game);

const reset = document.querySelector("#reset-btn");
function resetGame() {
  const rock = document.querySelector("img[src='src/rock.png']");
  const paper = document.querySelector("img[src='src/paper.png']");
  const sissors = document.querySelector("img[src='src/sissors.png']");
  const gun = document.querySelector("img[src='src/gun.png']");
  playerScore = 0;
  computerScore = 0;
  reset.style.visibility = "hidden";
  document.querySelector("#computer-score").innerText = computerScore;
  document.querySelector("#player-score").innerText = playerScore;
  document.querySelector(".round-results").innerText = "";
  rock.setAttribute("id", "rock");
  paper.setAttribute("id", "paper");
  sissors.setAttribute("id", "sissors");
  gun.setAttribute("id", "gun");
}
reset.addEventListener("click", resetGame);
