    var numOfPer = 0;
    var numOfUp = 0;
    var numOfDown = 0;

    var rNum = Math.floor(Math.random()*10) + 1;
/*1st => 2nd*/
    var gNum1 = parseInt(prompt("Enter a number from 1 to 10: "));
    if (gNum1 == rNum) {
        var res = "You have entered a perfect number"
        var gNum2 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfPer++;
    } else if (gNum1 < rNum){
        var res = "You have entered a lower number."
        var gNum2 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfUp++;
    } else if (gNum1 > rNum){
        var res = "You have entered a higher number"
        var gNum2 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfDown++;
    } else{
        var res = "Please enter a valid number"
        var gNum2 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
    }
/*2nd => 3rd*/
    if (gNum2 == rNum) {
        var res = "You have entered a perfect number"
        var gNum3 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfPer++;
    } else if (gNum2 < rNum){
        var res = "You have entered a lower number."
        var gNum3 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfUp++;
    } else if (gNum2 > rNum){
        var res = "You have entered a higher number"
        var gNum3 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfDown++;
    } else{
        var res = "Please enter a valid number"
        var gNum3 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
    }
/*3rd => 4th*/
    if (gNum3 == rNum) {
        var res = "You have entered a perfect number"
        var gNum4 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfPer++;
    } else if (gNum3 < rNum){
        var res = "You have entered a lower number."
        var gNum4 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfUp++;
    } else if (gNum3 > rNum){
        var res = "You have entered a higher number"
        var gNum4 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfDown++;
    } else{
        var res = "Please enter a valid number"
        var gNum4 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
    }
/*4th => 5th*/
    if (gNum4 == rNum) {
        var res = "You have entered a perfect number"
        var gNum5 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfPer++;
    } else if (gNum4 < rNum){
        var res = "You have entered a lower number."
        var gNum5 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfUp++;
    } else if (gNum4 > rNum){
        var res = "You have entered a higher number"
        var gNum5 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
        numOfDown++;
    } else{
        var res = "Please enter a valid number"
        var gNum5 = parseInt(prompt(res+"\nEnter a number from 1 to 10: "));
    }
/*5th*/
    if (gNum5 == rNum) {
        var res = "You have entered a perfect number"
        numOfPer++;
    } else if (gNum5 < rNum){
        var res = "You have entered a lower number."
        numOfUp++;
    } else if (gNum5 > rNum){
        var res = "You have entered a higher number"
        numOfDown++;
    } else{
        var res = "Please enter a valid number"
    }


var numOfPer = numOfPer*20;
document.querySelector("#display").innerHTML= ("Your score is: " + numOfPer);