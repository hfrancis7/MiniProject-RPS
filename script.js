var wins = 0;
var losses = 0;
var ties = 0;

function rps(){
    let input = window.prompt("Let's play RPS! Please type r, p, or s.");

    var cpu = Math.floor(Math.random() * 3);
    console.log(cpu);
    var cpuChoices = ["r","p", "s"];
    var cpuChoice = cpuChoices[cpu];

    window.alert("You chose " + input + "\nThe CPU chose " + cpuChoice);
    if((input == "r" && cpuChoice == "r") 
        ||(input == "s" && cpuChoice == "s")
        ||(input == "p" && cpuChoice == "p")){
            window.alert("It's a tie!");
            ties++;
    }else if((input == "r" && cpuChoice == "s") 
        ||(input == "s" && cpuChoice == "p")
        ||(input == "p" && cpuChoice == "r")){
            window.alert("You won!");
            wins++;
    }else if((input == "r" && cpuChoice == "p") 
        ||(input == "s" && cpuChoice == "r")
        ||(input == "p" && cpuChoice == "s")){
            window.alert("You lost...");
            losses++;
    }else{
        window.alert("That's not a valid option!");
    }

    let play = window.confirm("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties + ".\n Do you want to play again?");
    if(play){
        rps();
    }
}

rps();
