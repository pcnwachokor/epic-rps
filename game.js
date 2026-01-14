// rock..paper..scissors SHOOT!

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.random();
    let computerChoice = "";
    if(number >= 0 && number <= (1/3)) {
        console.log("Computer: rock");
        computerChoice = "rock";
    }
    else if ( number > (1/3) && number < (2/3)){
        console.log("Computer: paper");
        computerChoice = "paper";
    }
    else {
        console.log("Computer: scissors");
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    let humanLower = humanChoice.toLowerCase();

    if (humanLower == "rock" || humanLower == "paper" || humanLower == "scissors"){
        console.log("Me: " + humanLower);
        return humanLower;
    }
    else{
        console.log("🙈")
        return null;
    }

}

function playRound(humanChoice, computerChoice){

    //if invalid input
    if(!humanChoice){
        console.log("Thats not rock, paper, or scissors...")
    }

    //losing conditions
    if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore += 1
    }
    else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore += 1
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors!");
        computerScore += 1
    }

    //winning conditions
    if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore += 1;

    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors!");
        humanScore += 1;
    }

    //tying 
    if(humanChoice == computerChoice) {
        console.log("It's a draw!");
    }
}

function playGame() {
    for(let i = 0; i < 4; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(humanScore);
        console.log(computerScore);
    }

    if(humanScore > computerScore){
        console.log("The winner is.... THE PLAYER!");
    }
    else if (computerScore > humanScore){
        console.log("The winner is.... The Computer! Wow you suck buddy.");
    }
    else{
        console.log("The game ended in a draw...")
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(humanScore);
console.log(computerScore);

playRound(humanSelection, computerSelection);
playGame();