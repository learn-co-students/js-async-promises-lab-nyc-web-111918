const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionContainer = document.querySelector('.question-container')
const trueFalsebtns = Array.from(document.querySelector('.true-false-list').children)
const questionBtn =  document.querySelector('a')

function appendQuestion (question) {
  questionContainer.innerHTML = question.questionText
}

function askQuestionThen (time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve) {
    setTimeout(() => resolve(), time)
  })
}

function removeQuestion () {
  questionContainer.innerHTML = ""
}

function askQuestionThenRemoveQuestion (time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons () {
  return trueFalsebtns
}

function toggleTrueAndFalseButtons () {
  trueFalsebtns.forEach(function(btn) {
    btn.classList.toggle('hide')
  })
}

function displayQuestionOnClick () {
    questionBtn.addEventListener('click', function(e){
    askQuestionThenRemoveQuestion(5000)
    toggleTrueAndFalseButtons()
  })
}
