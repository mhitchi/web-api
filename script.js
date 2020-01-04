// What isn't working:
  // hide class isn't working on buttons
  // answer buttons aren't replacing the last answer buttons
  // colors on background and wrong answers
// TODO:
  // landing page
  // timer
  // view high score
  // score
  // after quiz completion
    // final score shown
    // ask for initials
    // store final score and initials in local storage

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

//shuffled questions
let shuffledQuestions, currentQuestionIndex;

//button functionality
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', function() {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  resetState();

  console.log('started');
  // TODO hide start button 
  startButton.classList.add('hide');
  //shuffle questions
  shuffledQuestions = questions.sort(function() {Math.random() - .5});
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
  clearStatusClass(document.body);
  // TODO hide next button 
  nextButton.classList.add('hide');
  while( answerButtonsElement.firstChild ) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  // make array from answers and loop through other buttons and select class
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  //if we havent run out of questions:
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    //show next button
    nextButton.classList.remove('hide');
  } else {
    // show start button
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

//TODO
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if( correct ) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  } 
}
//TODO
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}