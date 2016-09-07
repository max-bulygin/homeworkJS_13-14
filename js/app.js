'use strict';

var quizString = JSON.stringify(quiz);
localStorage.setItem('quizQuestions', quizString);
var quizzz = JSON.parse(localStorage.getItem('quizQuestions'));

var mySimpleQuiz = new Quiz(quizzz);

mySimpleQuiz.corrects = mySimpleQuiz.correctAnswers();
mySimpleQuiz.shuffle();
mySimpleQuiz.toHTML();
mySimpleQuiz.ua = mySimpleQuiz.getAnswers();

var submitButton = document.getElementById('submit');

function hideModal() {
    var modal = document.getElementById('myModal');
    var opacity = 1;
    var interval = setInterval(function () {
        if (opacity < 0) {
            clearInterval(interval); //ends up with opacity: -3.19189e-16 ???
            modal.style.display = 'none';
        } else {
            opacity -= 0.05;
            modal.style.opacity = opacity;
        }
    }, 20);
}

function showModal() {
    var modal = document.getElementById('myModal');
    var opacity = 0;
    var interval = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(interval);
        } else {
            modal.style.display = 'block';
            opacity += 0.05;
            modal.style.opacity = opacity;
        }
    }, 20);
}

submitButton.addEventListener('click', function () {
    var modalTitle = document.getElementById('modalTitle'),
        modalBody = document.getElementById('modalBody'),
        correctAnswers = mySimpleQuiz.compareAnswers(),
        amountOfQuestions = mySimpleQuiz.questionsCount;
    if (correctAnswers / amountOfQuestions > 0.8) {
        modalTitle.innerText = 'Поздравляем!';
        modalBody.innerText = 'Вы прошли этот тест!';
    } else {
        modalTitle.innerText = 'Увы :(';
        modalBody.innerText = 'Вы не прошли этот тест! Попробуйте еще раз';
    }
    showModal();
});
var close = document.getElementById('close');
close.addEventListener('click', function () {
    hideModal();
    location.reload();
});
