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
    if(input == "r"){
        if(cpuChoice == "r"){
            window.alert("It's a tie!");
        }else if(cpuChoice == "p"){
            window.alert("You lost...");
            losses++;
        }else{
            window.alert("You Won!");
            wins++;
        }
        
    }else if(input == "p"){
        if(cpuChoice == "r"){
            window.alert("You Won!");
            wins++;
        }else if(cpuChoice == "p"){
            window.alert("It's a tie!");
        }else{
            window.alert("You lost...");
            losses++;
        }
    }else if(input == "s"){
        if(cpuChoice == "r"){
            window.alert("You lost...");
            losses++;
        }else if(cpuChoice == "p"){
            window.alert("You won!");
            wins++;
        }else{
            window.alert("It's a tie!");
        }
    }else{
        window.alert("That's not a valid option!");
    }

    let play = window.confirm("Wins: " + wins + ", Losses: " + losses + ".\n Do you want to play again?");
    if(play){
        rps();
    }
}

rps();
