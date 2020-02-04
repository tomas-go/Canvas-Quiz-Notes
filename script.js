// array to get all questions/answers elements
var questionsHTML = document.getElementsByClassName('question_text user_content enhanced');
var answersHTML = document.getElementsByClassName('correct_answer');

if (answersHTML.length == questionsHTML.length) {
    for (var i = 0; i < answersHTML.length; i++) {
        var a = answersHTML[i].getElementsByClassName('answer_text');
        console.log(questionsHTML[i].innerHTML + "\nAnswer: " + a[0].innerHTML);
    }
}
else {
    console.log('ERROR: Questions and Answers are not the same size.');
}