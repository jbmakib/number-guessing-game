let numOfPer = 0;

const randomNum = Math.floor(Math.random() * 10) + 1;
let promptMsg = "\nEnter a number from 1 to 10"
for (let i = 0; i < 5; i++) {
    let givenNum = parseInt(prompt(promptMsg));
    if (givenNum == randomNum) {
        promptMsg = "Perfect Number\nEnter a number from 1 to 10";
        numOfPer++;
    } else if (givenNum < randomNum) {
        promptMsg = "Lower Number\nEnter a number from 1 to 10";
    } else if (givenNum > randomNum) {
        promptMsg = "Higher Number\nEnter a number from 1 to 10";
    };
};
numOfPer = numOfPer * 20;
document.querySelector("#display").innerHTML = ("Your score is: " + numOfPer);