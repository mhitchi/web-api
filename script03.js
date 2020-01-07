    // *correct answer scores 10 points
    // *incorrect answer scores -5 points
    // *final score + seconds left
    // *highscore addEventListener shows highscore from localStorage

// What isn't working:
  // colors on background and wrong answers
  // select question returning the right value
// TODO:
  // *view high score
  // *score
  // after quiz completion
    // *final score shown
    // *ask for initials
    // *store final score and initials in local storage

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const header = document.getElementById('header');
const paragraph = document.querySelector('p');
const timer = document.getElementById('timer');
const timeoutMessage = document.getElementById('timeout');
const finishMessage = document.getElementById('finished');
const score = document.getElementById('score');
const submitButton = document.getElementById('submit-btn');
var button;

let currentQuestionIndex = -1;

//set time to 75
var secondsLeft = 75;
//set points to 0
var points = 0;

startButton.addEventListener('click', startGame) 
nextButton.addEventListener('click', setNextQuestion);

function startGame() {
  console.log("started");
  //hide start button and show next button
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  //hide h1 and p
  header.classList.add('hide');
  paragraph.classList.add('hide');

  setTime();
  score.innerHTML = "Score: " + 0;

  //display question
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

//start timer from 75
function setTime() {
  var timerInterval = setInterval(function() {
    //decrease seconds left
    secondsLeft--;
    //count down
    timer.innerHTML = "Time: " + secondsLeft;

    //once secondsLeft is 0, clear out and print time out
    if(secondsLeft === 0) {
      //stop mechanism
      clearInterval(timerInterval);
      timeOut();
  }
  }, 1000);
}

//display time out message
function timeOut() {
  timer.innerHTML = " ";
  timeoutMessage.classList.remove('hide');
  questionElement.classList.add('hide');
  answerButtonsElement.classList.add('hide');
  nextButton.classList.add('hide');
} 

//display a question. 
function setNextQuestion() {
  // Change the index being referenced
  currentQuestionIndex++;

  //TODO show finished message and textInput for high score initials when done with questions
  if( currentQuestionIndex === 5 ) {
    timeoutMessage.classList.add('hide');
    finishMessage.classList.remove('hide');
    questionElement.classList.add('hide');
    answerButtonsElement.classList.add('hide');
    nextButton.classList.add('hide');


    //show score
    score.innerHTML = "Score: " + (points + secondsLeft);
    //TODO make element to show score
    //TODO make element textInput for initials
    submitButton.classList.remove('hide');
  }
  
  // resetState();
  console.log("next question");
  console.log(currentQuestionIndex);
  showQuestion(myQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  //TODO throwing error on the 3rd next click
  questionElement.innerHTML = question.question;
    answerButtonsElement.innerHTML = "";
    //print answers
    question.answers.forEach(answer => {
      button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');

      //TODO makes every answer wrong
      if( answer.correct ) {
        button.setAttribute('correct', true);
      } else {
        button.setAttribute('correct', false);
      }

      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
}

//get the answer by clicking

//tried (event, button), (event, answer)
function selectAnswer(event) {
  event.preventDefault();
  var state = button.getAttribute('correct');

  if( state === true ) {
    console.log("correct");
    points++;
  } else {
    console.log("wrong");
    points--;
  }
}

    //TODO
// function setStatusClass(element, correct) {
//   clearStatusClass(element);
//   if( correct ) {
//     element.classList.add('correct');
//   } else {
//     element.classList.add('wrong');
//   } 
// }
// //TODO
// function clearStatusClass(element) {
//   element.classList.remove('correct');
//   element.classList.remove('wrong');
// }
  