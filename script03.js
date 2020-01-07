const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const header = document.getElementById('header');
const paragraph = document.querySelector('p');
const timer = document.getElementById('timer');
const timeoutMessage = document.getElementById('timeout');
var score;

let currentQuestionIndex = -1;
//set time to 75
var secondsLeft = 75;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);

function startGame() {
  //hide start button and show next button
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  //hide h1 and p
  header.classList.add('hide');
  paragraph.classList.add('hide');

  setTime();
  score = 0;

  //display question
  questionContainerElement.classList.remove('hide');
  //setNextQuestion();
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


// Once that is working, display a question. 
function setNextQuestion() {
  // Change the index being referenced
  currentQuestionIndex++;
  
  // resetState();
  console.log("next question");
  console.log(currentQuestionIndex);
  showQuestion(myQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  //TODO not working
  questionElement.innerHTML = question.question;
    answerButtonsElement.innerHTML = "";
    //print answers
    question.answers.forEach(answer => {
      var button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      if( answer.correct ) {
        button.dataset.correct = answer.correct;
      } else {
        button.dataset.correct = answer.wrong;
      }
      // button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
}