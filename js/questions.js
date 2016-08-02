var QA = [
    {
        question: "2+2",
        answers: [
            "4",
            "2",
            "1"
        ]
    },
    {
        question: "2+4",
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
        l = a.length;                       //random number limit
        n = Math.floor(Math.random()*l),    //shuffle array n times
        t;                                  //temporary value container

    for (var i = 0; i < n; i++) {           //shuffle correct answer to nth position
        t = a.shift();
        a.push(t);
    }

    return a;
}

var question1 = new Question(QA[0]);

console.log(question1.allOptions);
alert(question1.correctAnswer);
alert(question1.shuffle());