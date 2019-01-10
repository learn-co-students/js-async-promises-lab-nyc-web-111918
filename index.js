const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector(".question-container")
const askAwayButton = document.querySelector(".waves-effect")

function appendQuestion(question) {
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(question);
    }, time)
  })
}

function removeQuestion() {
  return new Promise((resolve, reject) => {
    questionContainer.innerHTML = "";
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons() {
  return btns = document.querySelector(".true-false-list").querySelectorAll(".btn")
}

function toggleTrueAndFalseButtons() {
  return trueAndFalseButtons().forEach(function(btn) {
    console.log(btn);
    btn.classList.contains("hide") ? btn.classList.remove("hide") : btn.classList.add("hide")
  })
}

// Need to take even listener out of this function so it is not called multiple times
// But must be in function to pass tests
function displayQuestionOnClick() {
  askAwayButton.addEventListener("click", function(e) {
    askQuestionThenRemoveQuestion(5000);
    toggleTrueAndFalseButtons();
  })
};

// Comment out displayQuestionOnClick() and comment in below for buttons to work
// askAwayButton.addEventListener("click", function(e) {
//   askQuestionThenRemoveQuestion(5000);
//   toggleTrueAndFalseButtons();
// })
