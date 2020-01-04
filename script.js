// h1, p, ul, h2, button
var header = document.querySelector("h1");
var paragraph = document.querySelector("p");
var list = document.querySelector("ul");
// header2= right/wrong
var header2 = document.querySelector("h2");
var submitBtn = document.querySelector("button");
// highscore
var highscore = document.getElementById("highscore");
// time
var time = document.getElementById("time");

// view highscores
// time = 0
// start quiz btn
  // time set to 75 sec, starts countdown
  // triggers question 1, list of answers, submit btn
    // submit btn triggers question 2 and so on

    // correct answer scores 10 points
    // incorrect answer scores -5 points
    // final score + seconds left

    // highscore addEventListener shows highscore from localStorage