const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
];

let question;

function appendQuestion(question) {
  document.querySelector('.question-container').innerHTML = `${question.questionText}`
};

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(question)
    }, time);
  });
};

function removeQuestion() {
  return new Promise( () => {
      let container = document.querySelector('.question-container').innerHTML = ""
  });
};

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
};

function trueAndFalseButtons() {
  return buttons = document.querySelector('.true-false-list').querySelectorAll('.btn');
};

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach( (button) => {
    button.classList.toggle("hide");
  });
}

function displayQuestionOnClick() {
  // it adds both the true and false buttons, for 5 seconds
  // then hides both of the true and false questions
  // and removes the text of the question
  return document.querySelector('a').addEventListener("click", () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  });
}
