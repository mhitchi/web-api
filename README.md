# web-api
Web API- 4th Homework

As a coding bootcamp student
I want to take a timed quiz on JavaScript fundamentals that stores high scores
so that I can gauge my progress compared to my peers

# user experience
The landing page shows empty fields for score and time and presents the user with a title for the quiz and brief instructions as well as a start button.

Upon clicking the start button, questions appear one at a time with their 3-4 matching multiple-choice answer sets, presented as buttons. The timer is set to 75 seconds and begins counting down.

When the user selects an answer, the correct answer will change colors to green or red, depending on if the correct answer was the one that was clicked. The next button appears.

The user clicks the next button to navigate to the next question. This process continues until all 5 questions have been answered.

If the timer runs out before the user completes the quiz, a "Time's Out!" message is displayed.

If the user completes the quiz within the time limit, a "Finished!" message is displayed, the timer stops, a text input field is created and the user has the opportunity to enter their initials and submit them to a highscore board, which can be accessed through a button that is displayed after a user submits their initials.

# scoring
One point is added to the user's score for each correct answer. One point is deducted from the user's score for each incorrect answer. One point per second remaining is added to the user's score if the user completes the quiz before the timer runs out.