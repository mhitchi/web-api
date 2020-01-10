const myQuestions = [
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      {text: "function: myFunction()", correct: false},
      {text: "function = myFunction()", correct: false},
      {text: "function myFunction()", correct: true}
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      {text: "msg('Hello World')", correct: false},
      {text: "msgBox('Hello World')", correct: false},
      {text: "alert('Hello World')", correct: true},
      {text: "alertBox('Hello World')", correct: false}
    ],
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'",
    answers: [
      {text: "<script href = 'xxx.js'", correct: false},
      {text: "<script src = 'xxx.js'", correct: true},
      {text: "<script name = 'xxx.js'", correct: false},
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      {text: "The <head> section", correct: false},
      {text: "Both the <head> and the <body> sections", correct: false},
      {text: "The <body> section", correct: true}
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      {text: "<js>", correct: false},
      {text: "<scripting>", correct: false},
      {text: "<script>", correct: true},
      {text: "<javascript>", correct: false}
    ],
  }
]
