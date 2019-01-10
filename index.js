const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let container = document.querySelector('.question-container')

function askQuestion(){
  return questions[0];
};

function appendQuestion(question){
  container.innerHTML = question.questionText;
};

function askQuestionThen(time){
  question = askQuestion();
  appendQuestion(question)
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve(question);
    }, time );
  });
};

function removeQuestion(){
  container.innerHTML = ""
}

function askQuestionThenRemoveQuestion(time){
   return askQuestionThen(time)
    .then(removeQuestion)
}

function trueAndFalseButtons(){
  let buttons = document.querySelectorAll(".true-false-list .btn")
  buttons[0].innerText = "TRUE"
  buttons[1].innerText = "FALSE"
  return buttons
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons()[0].classList.toggle("hide")
  trueAndFalseButtons()[1].classList.toggle("hide")
}

function displayQuestionOnClick(){
  let cardPanel = document.querySelector(".card-panel")
  cardPanel.addEventListener('click', function(e){
    askQuestionThenRemoveQuestion(1000)
    toggleTrueAndFalseButtons() //<---- to get test to pass
  })
}

// let cardPanel = document.querySelector(".waves-effect")
// cardPanel.addEventListener('click', function(e){
//   askQuestionThenRemoveQuestion(10000)
//   toggleTrueAndFalseButtons()
// } <----------- to get button click
