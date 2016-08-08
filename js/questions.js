var QA = [
    {
        question: "Сколько будет 2+2",
        answers: [
            "4",
            "2",
            "1"
        ]
    },
    {
        question: "Сколько будет 2+4",
        answers: [
            "6",
            "3",
            "5"
        ]
    }
];

function Question (obj) {
    this.question = obj.question;
    this.correctAnswer = obj.answers[0];
    this.allOptions = obj.answers;
}

Question.prototype.shuffle = function () {
    var a = this.allOptions,                //array with answer options
        l = a.length,                       //random number limit
        n = Math.floor(Math.random()*l),    //shuffle array n times
        t;                                  //temporary value container

    for (var i = 0; i < n; i++) {           //shuffle correct answer to nth position
        t = a.shift();
        a.push(t);
    }

    return a;
};

Question.prototype.toHTML = function () {
    var output = '<li><h3>';
    output += this.question + '</h3>';
    for (var i = 0; i < this.allOptions.length; i++){
        output += '<p><label><input type="checkbox"> ';
        output += this.allOptions[i];
        output += '</label></p>';
    }
    output += '</li>';
    return output;
};

// Question.prototype.toHTML = function () {
//     var output = '<li><h3>';
//     output += this.question + '</h3>';
//     for (var i = 0; i < this.allOptions.length; i++){
//         output += '<p><label><input type="checkbox"> ';
//         output += this.allOptions[i];
//         output += '</label></p>';
//     }
//     output += '</li>';
//     return output;
// };

// Question.prototype.initQuestion = function () {
//     this.toHTML();
// };

var question1 = new Question(QA[0]);
document.write(question1.shuffle());
document.write(question1.toHTML());
