const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion);
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('a.btn').addEventListener("click", function(){
    displayQuestionOnClick()
  })
})

function displayQuestionOnClick(){
  buttons=trueAndFalseButtons();
  buttons.forEach(function(button){
    if (button.classList.contains("hide")){
      button.classList.remove("hide")
    }
  });
  askQuestionThenRemoveQuestion(5000).then(resp => toggleTrueAndFalseButtons(true))
}
function appendQuestion(question){
  document.querySelector('.question-container').innerHTML=`${question.questionText}`
}

function askQuestionThen(time){
  question=questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("")
    }, time )
  })
}
function removeQuestion(){
  document.querySelector('.question-container').innerHTML=``
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.lighten-2')
}

function toggleTrueAndFalseButtons(log=false){
  if (log){
    console.log("Toggling");
  }
  buttons=trueAndFalseButtons();
  buttons.forEach(function(button){
    if (button.classList.contains("hide")){
      button.classList.remove("hide")
    }else{
      button.classList.add("hide")
    }
  });
}
