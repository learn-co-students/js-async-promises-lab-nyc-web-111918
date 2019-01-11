const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector('.question-container')

document.addEventListener('DOMContentLoaded', () => {
  questionContainer.innerHTML = question


})

function appendQuestion(questionAdd){
  const questionContainer = document.querySelector('.question-container')
  questionContainer.innerHTML = questionAdd.questionText

}

function askQuestionThen(time){
  question = questions[0]
  return new Promise(function(resolve){
    setTimeout(() => resolve(), time)

  })
}

function removeQuestion(){
  questionContainer.innerHTML = ''
}

function askQuestionThenRemoveQuestion(time){
  appendQuestion(questions[0])
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.lighten-2')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn) {
    if(btn.className.includes('hide')){
      btn.classList.remove('hide')
    } else {
      btn.classList.add('hide')
    }
  })
}

function displayQuestionOnClick(){
  document.querySelector('a.btn').addEventListener('click', (event) => {
   toggleTrueAndFalseButtons()
   askQuestionThenRemoveQuestion(5000)
   toggleTrueAndFalseButtons()
  })
}
