// Coffee Quiz
// The correct answer for each question (question 1 to 5)
var answers = ["c", "a", "b", "b", "c"];

// Runs when the user clicks the "Check My Answers" button
function checkQuiz() {
    var score = 0;

    // Check the 5 questions one by one
    for (var i = 0; i < answers.length; i++) {
        var number = i + 1;
        var choice = document.getElementById("q" + number).value;
        var feedback = document.getElementById("feedback" + number);

        if (choice == answers[i]) {
            score = score + 1;
            feedback.innerHTML = " Correct!";
            feedback.className = "correct";
        } else {
            feedback.innerHTML = " Wrong";
            feedback.className = "wrong";
        }
    }

    // Show the total score and a message
    var message = "";
    if (score == 5) {
        message = "Perfect! You are a real home barista!";
    } else if (score >= 3) {
        message = "Good job! You know the basics.";
    } else {
        message = "Keep learning! Read the guide and try again.";
    }

    document.getElementById("score").innerHTML =
        "Your score: <strong>" + score + " / 5</strong><br>" + message;
}

// Runs when the user clicks the "Try Again" button
function resetQuiz() {
    for (var i = 1; i <= answers.length; i++) {
        document.getElementById("q" + i).value = "";
        document.getElementById("feedback" + i).innerHTML = "";
    }
    document.getElementById("score").innerHTML = "";
}
