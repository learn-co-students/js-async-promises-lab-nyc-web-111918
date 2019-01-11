const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionContainer = document.querySelector(".question-container")

function appendQuestion(question){
  questionContainer.innerText = question.questionText

}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(question){
      resolve(question)
    }, time*10)
  })
  }


const removeQuestion = function(){
  return questionContainer.innerText = ""
}

function askQuestionThenRemoveQuestion(time){
// should append question for given time
  return askQuestionThen(time)
// then remove question when promise resolves
 .then(removeQuestion)
 .then(toggleTrueAndFalseButtons)
}

function trueAndFalseButtons(){
  // return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')

  return btns= document.querySelectorAll(`[data-id]`)
  // return btns
}

function toggleTrueAndFalseButtons(){
  // debugger
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
// displays the question for after
// a click event to the button
// so we have to find the button
// and put an event listener on it
  askButton = document.querySelector(".waves-effect")

  askButton.addEventListener("click", (e)=>{
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(time)
  })
}
