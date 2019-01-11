const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const container = document.querySelector('.question-container')
const askAwayButton = document.querySelector('#ask-away-button')

function appendQuestion(question){

  container.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion(question) {
  container.innerHTML = ''
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
}


function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(button){
    button.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  return askAwayButton.addEventListener("click", () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
