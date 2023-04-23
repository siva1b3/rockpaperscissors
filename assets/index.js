let yourscore = 0;
let opponetscore = 0;

let you;
let opponet;

let choices = ["rock","paper","scissors"]
let randomNum_my = Math.floor(Math.random() * 3);
randomNum_my = `assets/images/${choices[randomNum_my]}.png`
let randomNum_opponent = Math.floor(Math.random() * 3);
randomNum_opponent = `assets/images/${choices[randomNum_opponent]}.png`

window.onload = function() {
    // Get a reference to the image element
    var img = document.getElementById("rock_image");
    // Set the src attribute to a new value
    img.src = "assets/images/rock.png";
    // Get a reference to the image element
    var img = document.getElementById("paper_image");
    // Set the src attribute to a new value
    img.src = "assets/images/paper.png";
    // Get a reference to the image element
    var img = document.getElementById("scissor_image");
    // Set the src attribute to a new value
    img.src = "assets/images/scissors.png";
    // Get a reference to the image element
    var img = document.getElementById("opponent-choice");
    // Set the src attribute to a new value
    img.src = randomNum_opponent;   
    // Get a reference to the image element
    var img = document.getElementById("my-choice");
    // Set the src attribute to a new value
    img.src = randomNum_my;
}





