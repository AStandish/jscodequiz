const startbutton = document.getElementById("startbutton");
const startdiv = document.getElementById("startdiv");
const formdiv = document.getElementById("formdiv");
const scorediv = document.getElementById("scorediv");
const questiondiv = document.getElementById("questiondiv");
const questionheader = document.getElementById("questionheader");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const timerDisplay = document.getElementById("timer");
let index = 0;
let timer = 60;

const questions = [
  {
    name: "What is the command to add a file in Git Bash?",
    answer: 1,
    options: ["git status", "git add", "git merge", "git branch"],
  },
  {
    name: "What is the HTML tag for header?",
    answer: 0,
    options: ["<header>", "<h1>", "<footer>", "<h2>"],
  },
  {
    name: "What is the name for a JavaScript variable that cannot be reassigned?",
    answer: 1,
    options: ["let", "const", "variable", "html"],
  },
];

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    timer--;
    timerDisplay.text.Content = timer;

    if (timer === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

function renderQuestion() {
  timerDisplay.innerHTML = timer;
  if (index < questions.length) {
    const question = questions[index];
    questionheader.textContent = question.name;
    questionheader.setAttribute("data-answer", question.answer);
    choice1.textContent = question.options[0];
    choice2.textContent = question.options[1];
    choice3.textContent = question.options[2];
    choice4.textContent = question.options[3];
  } else {
    console.log("done");
    return;
  }
}

questiondiv.addEventListener("click", function (event) {
  question = event.target;
  const chosenAnswer = event.target.getAttribute("data-choice");
  const expectedAnswer = document
    .getElementById("questionheader")
    .getAttribute("data-answer");

  if (chosenAnswer && chosenAnswer === expectedAnswer) {
    index++;
    renderQuestion();
  } else {
    // decrease the timer value by whatever
    timer -= 5;
    timerDisplay.innerHTML = timer;
  }
});

startbutton.addEventListener("click", function () {
  startdiv.classList.add("hidden");
  questiondiv.classList.remove("hidden");
  renderQuestion();
});

// TODO for localStorage
// set empty array in LS ONLY IF there is no array in LS with that name
// when game is over, get the array from LS with the name of Highscore
// push a object in the array with a key of the name of the player and a value of the highscore

// const higscoreForPlaye = {
//   name: "Peter",
//   score: 23,
// };

// AFTER this, just set the new array with the latest highscore added, into the LS overwriting the older one
