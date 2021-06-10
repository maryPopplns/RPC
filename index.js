function computerPlay() {
  let weapons = ["rock", "paper", "sissors"];
  return weapons[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
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
  rules.style.visibility = "hidden";
  anchor.removeAttribute("href");
  division.style.backgroundColor = "#611212";
  main.style.visibility = "visible";
}
playButton.addEventListener("click", ruleHider);

const rock = document.querySelector("#rock");
rock.addEventListener("click");
const paper = document.querySelector("#paper");

const sissors = document.querySelector("#sissors");

const gun = document.querySelector("#gun");
