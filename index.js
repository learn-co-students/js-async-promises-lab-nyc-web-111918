const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]
const questionContainer = document.querySelector('.question-container')
const buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')

let question;

function appendQuestion(question) {
  questionContainer.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve()
    }, time)
  })
}

function removeQuestion() {
  return new Promise( () => {
    questionContainer.innerHTML = ""
  })
}

function askQuestionThenRemoveQuestion(time) {
   return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return buttons
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach( (button) => {
  button.classList.toggle("hide");
  })
}

function displayQuestionOnClick(time) {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(time)
}
