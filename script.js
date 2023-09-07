function getComputerChoice() {
    let random = Math.random();
    if(random < 0.33) {
        return "Rock"
    }
    else if(random < 0.66 && random >= 0.33) {
        return "Scissors"
    }
    else return "Paper"
        };

//console.log(getComputerChoice());

function playRound(playerSelection,computerSelection) {
    

    if(playerSelection === computerSelection) return "it's a tie!";
    if(playerSelection === "rock" && computerSelection === "scissors") return "you win!";
    else if(playerSelection === "rock" && computerSelection === "paper") return "you lose!";
    else if(playerSelection === "scissors" && computerSelection === "paper") return "you win!";
    else if(playerSelection === "scissors" && computerSelection === "rock") return "you lose!";
    else if(playerSelection === "paper" && computerSelection === "scissors") return "you lose!";
    else if (playerSelection === "paper" && computerSelection === "rock") return "you win!";
    else return "oops error";
};

const playerSelection = prompt("Rock, Scissors, or Paper?").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

console.log("Your choice is "+ playerSelection + ", computer choice is "+ computerSelection)
console.log(playRound(playerSelection,computerSelection));

