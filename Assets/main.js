//create jquery function to append quetions and answers//
//start button to start the game//
//for loop for questions//
//function to append questions to subwrapper//
//sub loop to append values to the answers within the buttons//
// radio button//

$('#start').on('click', function () {
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})
//  Questions array for the quiz//
var questions = [{
    question: "Who is the actor in Terminator?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Arnold"
}, {
    question: "Who is the actor in Titanic?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Leonardo"
}, {
    question: "Who is the actor in Rambo?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Stallone"
}, {
    question: "Who is the actor in Wolverine?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Hugh"
}, {
    question: "Who is the actor in Rocky?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Stallone"
}, {
    question: "Who is the actor in End of Days?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Arnold"
}, {
    question: "Who is the actor in Gangs of New York?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Leonardo"
}, {
    question: "Who is the actor in Total Recall?",
    answers: ["Arnold", "Stallone", "Leonardo", "Hugh"],
    correctAnswer: "Arnold"
}];

//create an object called game to keep track and correct and incorrect answers //
//add countdown function//
//create timer function//
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter<=0){
            console.log("Time is up!");
            game.done();
        }

    },
    //create start function//
    //Add jqery to add timer to the quiz
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0;i< questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            for (var j = 0; j<questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }

        }
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    //create done function to check whether an question is correct or incorrect for each and every question//
    done: function(){
        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val() == questions[1].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val() == questions[2].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val() == questions[3].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });

        //show results screen//
        this.result();
    },
    //create function to print result on screen//
    //Add subwrapper to print correct answers//
    //Add subwrapper to print incorrect answers//
    //Add subwraper to print unaswered question//
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered:" + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }


}