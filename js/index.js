var progTest = {
    header: "Тест по программированию",
    question: "Вопрос №",
    answer: " Вариант ответа №",
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
        for (i = 0; i < queAmount; i++){
            this.getInnerTag('li', 'list-item', '.list');
        }
    },
    getQuestions: function () {
        var listItems = document.querySelectorAll('.list-item');
        for (i=0; i<listItems.length; i++) {
            listItems[i].innerHTML = "<h3>" + this.question + (i+1) + "</h3>";
        }
    },
    getAnswers: function () {
        var listItems = document.querySelectorAll('.list-item');
        var i = 0;
        while (i<listItems.length) {
            for (j=0; j<3; j++) {
                var tag = document.createElement('p');
                listItems[i].appendChild(tag);
                tag.innerHTML = "<label><input type=\"checkbox\"> " + this.answer + (j+1) + "</label>";
            }
            i++;
        }
    },
    getButton: function () {
        this.getInnerTag('button', 'btn', '.col-md-12');
        var but = document.querySelector('.btn');
        but.innerHTML = this.button;
    }
}

progTest.getDiv('div', 'container');
progTest.getInnerTag('div', 'row', '.container');
progTest.getInnerTag('div', 'col-md-12', '.row');
progTest.getHeader('h1', '.col-md-12');
progTest.getInnerTag('ol', 'list', '.col-md-12');
progTest.getListItems(3);
progTest.getQuestions();
progTest.getAnswers();
progTest.getButton();

