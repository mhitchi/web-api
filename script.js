// What isn't working:
  // colors on background and wrong answers
  // timer doesn't stop at 0
  // next button isn't working
  // select question isn't working
// TODO:
  // landing page
  // timer
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
  shuffledQuestions = myQuestions.sort(function() {Math.random() - .5});
  currentQuestionIndex = 0;
  // show questions
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

}

function setNextQuestion() {
  resetState();
  //TODO get to next question
  currentQuestionIndex++;
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerHTML = myQuestions.question;
  myQuestions.answers.forEach(answer => {
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
  const selectedButton = e.target;
  // correct returns as a boolean
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