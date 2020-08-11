function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the Capital of Germany?", ["Munich", "Berlin","Hamburg", "Frankfurt"], "Berlin"),

    new Question("National Calendar of India?", ["Gregorian Calendar", "Saka Calendar","Indian National Calendar", "Vikram Samvat"], "Saka Calendar"),
    

    new Question("National River of Russia?", ["Oka River", "Northern Dvina River","Kama River", "Volga River"], "Volga River"),
    

    new Question("Currency of Dubai?", ["Dollar", "Yen","Dirhams", "Euro"], "Dirhams"),
        

];


var quiz = new Quiz(questions);


populate();