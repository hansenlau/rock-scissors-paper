function getComputerChoice() {
    let random = Math.random();
    if(random < 0.33) {
        console.log("Rock");}
    else if(random < 0.66 && random >= 0.33) {
        console.log("Scissors");}
    else console.log("Paper");
    console.log(random);
};

getComputerChoice();
