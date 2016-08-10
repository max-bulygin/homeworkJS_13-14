function Quiz(obj) {
    this.quizObject = obj;
    this.title = obj.title;
    this.questionsAndAnswers = obj.QA;
    this.questionsCount = obj.QA.length;
}

/*
 * Shuffle method simply moves correct answer to random position
 * based on random number from 0 to n-1 where n is a number of options given
 */

Quiz.prototype.shuffle = function () {
    for (var j = 0; j < this.questionsCount; j++) {
        var a = this.questionsAndAnswers[j].answers,        //array with answer options
            l = a.length,                                   //random number limit
            n = Math.floor(Math.random() * l),              //shuffle array n times
            t;                                              //temporary value container

        for (var i = 0; i < n; i++) {                       //shuffle correct answer to nth position
            t = a.shift();
            a.push(t);
        }
    }
    return a;
};

/*
 * Put all correct answers in one array
 */

Quiz.prototype.correctAnswers = function () {
    var array = [];
    this.questionsAndAnswers.map(function (elem) {
        array.push(elem.answers[0]);
    });
    return array;
}

/*
 * Render html with template
 */

Quiz.prototype.toHTML = function () {
    var html = document.body;
    html.innerHTML = tmpl("quiz", this.quizObject);
};

/*
 * getAnswers checks every input element and pushes the checked answers
 * to userAnswers array.
 */

Quiz.prototype.getAnswers = function () {
    var inputs = document.getElementsByTagName("input");
    var submitButton = document.getElementById('submit');
    var checkedAnswers = [];

    submitButton.addEventListener("click", function () {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                var a = inputs[i].nextSibling.data;
                checkedAnswers.push(a);
            }
        }
    });
    return checkedAnswers;
};

Quiz.prototype.compareAnswers = function () {
    var count = 0;
    var a = this.corrects;
    var b = this.ua;
    for (var i = 0; i < a.length; i++) {
        if ( b[i].includes(a[i]) ) count += 1;
    }
    console.log(count);
};

var mySimpleQuiz = new Quiz(quiz);
mySimpleQuiz.corrects = mySimpleQuiz.correctAnswers();
mySimpleQuiz.shuffle();
mySimpleQuiz.toHTML();
mySimpleQuiz.ua = mySimpleQuiz.getAnswers();

var submitButton = document.getElementById('submit');

submitButton.addEventListener("click", function () {
    mySimpleQuiz.compareAnswers();
});
