// view highscores
// time = 0
// start quiz btn
  // time set to 75 sec, starts countdown
  // *triggers question 1, list of answers, submit btn
    // *submit btn triggers question 2 and so on
    // *correct answer scores 10 points
    // *incorrect answer scores -5 points
    // *final score + seconds left
    // *highscore addEventListener shows highscore from localStorage
//TODO hide buttons
//const origButton = document.querySelectorAll('og');
const origButton = document.getElementById('og');

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const header = document.querySelector('h1');
const paragraph = document.querySelector('p');
const timer = document.getElementById('timer');
const timeoutMessage = document.getElementById('timeout');
var score;

let currentQuestionIndex = 0;

  //set time to 75
  var secondsLeft = 75;
    // Build the landing page with no action. Just the landing. 
    // What is required from the spec sheet?  A button action or “START” -> start your script.js file . 
    // Define some variable, Grab (or maybe add in the HTML first) some elements and add a listener to the button. 
  startButton.addEventListener('click', startGame) 
  nextButton.addEventListener('click', function() {
    currentQuestionIndex++;
    setNextQuestion;
  });
    // Write some logic to add something to the DOM when the button is clicked (make it simple first, just some text or an item from an array. Take a look back at the exercises we did in class. If you didn’t understand some part the answers have been posted. Look through them and try to follow what is happening. If some code looks useful. Copy it over and comment it out and use that as a visual reference for your new function or action. Then delete the commented out code when you don’t need it.) and have something be appended to the DOM. 
  function startGame() {
    console.log("started");
    //hide start button
    startButton.classList.add("hide");
    //show next button
    nextButton.classList.remove("hide");
    //hide h1 and p
    header.classList.add('hide');
    paragraph.classList.add('hide');
    //set timer
    setTime();
    //set score to 0
    score = 0;
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
      }, 1000);

      //once secondsLeft is 0, clear out and print time out
      if(secondsLeft === 0) {
        //stop mechanism
        clearInterval(timerInterval);
        timeOut();
      }
    }

    //TODO not working. Tried secondsLeft = 0, 
    function timeOut() {
      timer.innerHTML = " ";
      timeoutMessage.classList.remove('hide');
    } 

    // Once that is working, display a question. 
    function setNextQuestion() {
      // resetState();
      showQuestion(myQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
      // //print one question every 15 seconds
      // var everyFifteen = setInterval(function() {
      //   // loop through array of question objects
      //   for( var i = 0; i < myQuestions.length; i++ ) {
      //     //print question
      //     console.log(question[i]);
      //     questionElement.innerHTML = question[i];
      //     //print answers
      //   }
      // }, 15000);
      questionElement.innerHTML = question.question;
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
        // remove original buttons
        // ERROR: Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node
        // answerButtonsElement.removeChild(origButton);
        //removed first and last buttons: origButton.classList.add('hide');
        //removed first and last buttons: origButton.style.display = "none";
        //removed first and last buttons: origButton.hidden = true;
        //removed all buttons:  answerButtonsElement.remove(origButton);
      });
    }
    // Once the question is displaying, figure out how to get the answer from the user selecting a checkbox. OR simply clicking on their answer. (Sounds like the event bubbling we went over on Friday * HINT* ) . 
    // See if you can log that answer somewhere (be it the console to start and maybe to a variable after that). 
    // When one question and answer submission works, then how do we use that button submission to trigger the next question. 
    // And how do we keep track of what question we are on? (Maybe a loop?)