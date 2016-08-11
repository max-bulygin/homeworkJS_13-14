'use strict';

localStorage.setItem('name', 'John');
var quizString = JSON.stringify(quiz);
console.log(quizString);
localStorage.setItem('quizQuestions', quizString);
var quizzz = JSON.parse(localStorage.getItem('quizQuestions'));
console.log(quizzz);

var mySimpleQuiz = new Quiz(quizzz);

mySimpleQuiz.corrects = mySimpleQuiz.correctAnswers();
mySimpleQuiz.shuffle();
mySimpleQuiz.toHTML();
mySimpleQuiz.ua = mySimpleQuiz.getAnswers();

var submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
    var correctAnswers = mySimpleQuiz.compareAnswers();
    var amountOfQuestions = mySimpleQuiz.questionsCount;
    console.log(amountOfQuestions);
    if ( correctAnswers/amountOfQuestions > 0.8 ) alert('You passed')
    else alert('you did not pass');
});
