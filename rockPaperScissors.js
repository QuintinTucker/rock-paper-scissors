
function computerPlay(){
    let options = ["Rock","Paper","Scissors"];
    let play = options[Math.floor(Math.random()*options.length)];
    return play;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Rock"){
        return("Tie.");
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return("You Lose.");
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return("You Win.");
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return("You Win.");
    }
    else if(playerSelection == "Paper" && computerSelection == "Paper"){
        return("Tie.");
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return("You Lose.");
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return("You Lose.");
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return("You Win.");
    }
    else if(playerSelection == "Scissors" && computerSelection == "Scissors"){
        return("Tie.");
    }
    else{
        return("Invalid Input, Try again.");
    }

}

function game(){
    let score = [0,0];
    while(score[0]+score[1]<5){

        let userSelection = prompt("Rock, Paper, Scissors?");
        userSelection = userSelection[0].toUpperCase() +            userSelection.substring(1).toLowerCase();

        let result = playRound(userSelection,computerPlay());
        console.log(result);

        if(result == "Invalid Input, Try again."){
            continue;
        }

        if(result == "You Win."){
            score[0]++;
        }
        else if(result == "You Lose."){
            score[1]++;
        }
    }
    console.log("The Game is Over, the score is User: " + score[0] + " Computer: " + score[1]);
}