// // h1, p, div, h2, button
// var header = document.querySelector("h1");
// var paragraph = document.querySelector("p");
// var quiz = document.getElementById("quiz");
// // header2= right/wrong
// var header2 = document.querySelector("h2");
// var submitBtn = document.querySelector("button");
// // highscore
// var highscore = document.getElementById("highscore");
// // time
// var time = document.getElementById("time");


// // view highscores
// // time = 0
// // start quiz btn
//   submitBtn.addEventListener("click", buildQuiz);
//   // time set to 75 sec, starts countdown
//   // triggers question 1, list of answers, submit btn
//     // submit btn triggers question 2 and so on

//     function buildQuiz() {
      
//     }

//     function nextQuestion() {

//     }

//     function selectAnswer() {

//     }


//     function correct() {

//     }

//     function incorrect() {

//     }

//     // correct answer scores 10 points
//     // incorrect answer scores -5 points
//     // final score + seconds left

//     // highscore addEventListener shows highscore from localStorage

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

//shuffled questions
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);


function startGame() {
  resetState();

  console.log('started');
  // TODO hide start button 
  startButton.classList.add('hide');
  //shuffle questions
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  // show questions
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerHTML = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    if( answer.correct) {
      button.dataset.correct = answer.correct;
    } else {
      button.dataset.correct = answer.wrong;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  // TODO hide next button 
  nextButton.classList.add('hide');
  while( answerButtonsElement.firstChild ) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer() {
  var selectedButton = e.target;
}