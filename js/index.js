//This is the old version of  this quiz. Please disregard.
var progTest = (function() {
    var createTest = {
        header: "Тест по программированию",
        question: "Вопрос: сколько будет ",
        answer: " Вариант ответа: ",
        button: "Проверить мои результаты",
        getDiv: function (tagName, clName) {
            var tag = document.createElement(tagName);

            tag.classList.add(clName);
            document.body.appendChild(tag);
        },
        getInnerTag: function (tagName, clName, parent) {
            var tag = document.createElement(tagName);

            tag.classList.add(clName);
            document.querySelector(parent).appendChild(tag);
        },
        getHeader: function (hNum, selector) {
            var tag = document.createElement(hNum);

            tag.innerHTML = this.header;
            document.querySelector(selector).appendChild(tag);
        },
        getListItems: function (queAmount) {
            for (var i = 0; i < queAmount; i++) {
                this.getInnerTag('li', 'list-item', '.list');
            }
        },
        getQuestions: function () {
            var listItems = document.querySelectorAll('.list-item');

            for (var i = 0; i < QA.length; i++) {
                listItems[i].innerHTML = "<h3>" + this.question + QA[i].question + "</h3>";
            }
        },
        getAnswers: function () {
            var listItems = document.querySelectorAll('.list-item');

            for (var i = 0; i < QA.length; i++) {
                var answersCollection = QA[i].answers;
                for (var j = 0; j < answersCollection.length; j++) {
                    var tag = document.createElement('p');

                    listItems[i].appendChild(tag);
                    tag.innerHTML = '<label><input type="checkbox"> ' + this.answer + answersCollection[j] + '</label>';
                }
            }
        },
        getButton: function () {
            this.getInnerTag('button', 'btn', '.col-md-12');
            var but = document.querySelector('.btn');

            but.innerHTML = this.button;
        },
        init: function () {
            this.getDiv('div', 'container');
            this.getInnerTag('div', 'row', '.container');
            this.getInnerTag('div', 'col-md-12', '.row');
            this.getHeader('h1', '.col-md-12');
            this.getInnerTag('ol', 'list', '.col-md-12');
            this.getListItems(3);
            this.getQuestions();
            this.getAnswers();
            this.getButton();
        }
    };

    createTest.init();

    return createTest;
})();




