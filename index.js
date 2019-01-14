// GLOBAL Variables
//questions is suppost to imitate json.
const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]
let question;
const questionContainer = document.querySelector('.question-container')
const askAwatButton = document.querySelector('.btn')
//need to listin to the event on the page load to get these elements on the HTML page.
function appendQuestion() {
  return questionContainer.innerHTML =
  `${questions[0].questionText}`
}
function askQuestionThen(time) {
    question = questions[0]
    appendQuestion(question)
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(question)
      }, time)
    })
}

function removeQuestion () {
  questionContainer.innerHTML = ''
}

function askQuestionThenRemoveQuestion (time) {
  return askQuestionThen(time)
  .then(removeQuestion)
}

function trueAndFalseButtons() {
  let buttons = document.querySelector('.true-false-list')
  return buttons.querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle('hide')
  })
}

function displayQuestionOnClick() {
return  askAwatButton.addEventListener('click', function() {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(5000)
  })
}

document.addEventListener('DOMContentLoaded', function (){
  console.log('Page Has loaded')
  // fetch(question)
  // //fetch the json array with all of the objects.
  // .then(function(response){
  // //parse that jason
  //     return (response.json())
  // })
  // .then(function(parsedQuestionObj){
  //   return
  // })
})
