console.log("Hello World!")


function getComputerChoice() {
    let number = Math.random();
    let choice = "";
    console.log(number);
    if(number >= 0 && number <= (1/3)) {
        console.log("rock");
        choice = "rock";
    }
    else if ( number > (1/3) && number < (2/3)){
        console.log("paper");
        choice = "paper";
    }
    else {
        console.log("scissors");
        choice = "scissors";
    }
    return choice;
}



getComputerChoice();