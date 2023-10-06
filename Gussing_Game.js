let max = prompt("give max number!");
let random = Math.floor(Math.random() * max) + 1;
console.log("if you give quit value then game stoped this movment");
let guess = prompt("guess the right number");
document.write("you won the game");
while (true) {
    if (guess == "quit ") {
        console.log("you choose quite! exit from game");
        break;
    }
    if (guess == random) {
        console.log(`you won the game because you choose ${guess} and computer choose`);
        break;
    }
    else if (guess < random) {
        guess = prompt("you guess small number.please try again");
    }
    else if (guess > random) {
        guess = prompt("you guess large number.please try again");
    }
};