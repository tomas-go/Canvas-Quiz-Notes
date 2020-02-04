// array to get all questions/answers elements
var questionsHTML = document.getElementsByClassName('question_text user_content enhanced');
var answersHTML = document.getElementsByClassName('correct_answer');

// loop to get all the question texts
for (var i = 0; i < questionsHTML.length; i++) {
    console.log(questionsHTML[i].innerHTML);
  }

// loop to get all the correct answer texts, even if I selected the wrong answer on the quiz
for (var i = 0; i < answersHTML.length; i++) {
    var a = answersHTML[i].getElementsByClassName('answer_text');
    console.log(a[0].innerHTML);
}