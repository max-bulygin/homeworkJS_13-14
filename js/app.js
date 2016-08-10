var mySimpleQuiz = new Quiz(quiz);

mySimpleQuiz.corrects = mySimpleQuiz.correctAnswers();
mySimpleQuiz.shuffle();
mySimpleQuiz.toHTML();
mySimpleQuiz.ua = mySimpleQuiz.getAnswers();

var submitButton = document.getElementById('submit');
submitButton.addEventListener("click", function () {
    mySimpleQuiz.compareAnswers();
});
