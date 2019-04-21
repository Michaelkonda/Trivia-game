function submitAnswers() {
    var total = 5;
    var score = 0;
    // get some user inputs
    // this line getting the value for the first answer from the user and storing in a variable called q1
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

console.log(q1)
    //Basic validation
    for (i = 1; i <= total; i++) {
        console.log(i)
        // if (eval('q' + i) == null || eval('q' + i) == '') {
        //     alert('You missed question' + i);
        //     return false;

        // }
    }

    // Setting correct answers.
    var answers = ["a", "a", "d", "a", "d"];

    // Check Answers
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    // Display results.
    var results = documents.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span> </h3>';
    alert('You scored ' + score + 'out of' + total);
    return false;
}

event.preventDefault()
//to create a function for submit answers.
//Place event.preventDefault() inside but right atr the top.