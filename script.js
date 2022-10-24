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
const saveButton = document.getElementById("saveButton");
const initials = document.getElementById("initials");
let index = 0;
let timer = 60;
let interval;
let secondsElapsed = 0;
let timeIntervalHandler;

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

//starts and updates timer

function startTimer() {
  timeIntervalHandler = setInterval(function () {
    if (timer <= 0) {
      clearInterval(timerDisplay);
    }
    timer--;

    timerDisplay.textContent = timer;
  }, 1000);
}

startbutton.addEventListener("click", function () {
  startdiv.classList.add("hidden");
  questiondiv.classList.remove("hidden");
  renderQuestion();
  startTimer();
});

function renderQuestion() {
  //  timerDisplay.textContent = timer;

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
  const answerButtonClicked = event.target;

  if (answerButtonClicked.matches("button")) {
    const chosenAnswer = answerButtonClicked.getAttribute("data-choice");
    const expectedAnswer = document
      .getElementById("questionheader")
      .getAttribute("data-answer");

    if (chosenAnswer !== expectedAnswer) {
      // decrease the timer value by 5
      timer -= 5;
      timerDisplay.innerHTML = timer;
    }

    index++;

    if (index < questions.length) {
      renderQuestion();
    } else {
      questiondiv.classList.add("hidden");
      formdiv.classList.remove("hidden");
    }
  }
});

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (!initials.value) {
    alert("Please enter your initials before pressing submit!");
    return;
  }
  let highScores = [];
  const highScoresStr = localStorage.getItem("highScores");
  if (highScoresStr) {
    highScores = JSON.parse(highScoresStr);
  }
  const scoreItem = {
    score: 0, //needs to calculate answers
    initials: initials.value,
  };
  highScores.push(scoreItem);
  highScores.sort(function (a, b) {
    b.score - a.score;
  });

  localStorage.setItem("highScores", JSON.stringify(highScores));
  //window.location.assign("highscores.html"); this page needs to be created
});

function renderHighScore() {
  scoreItem = JSON.parse(localStorage.getItem("highscoreForPlayer"));
  for (let i = 0; i < highScores.length; i++) {
    scoreItem = document.createElement("scorediv");
    console.log(scoreItem);
  }
}

// TODO for localStorage
// set empty array in LS ONLY IF there is no array in LS with that name
// when game is over, get the array from LS with the name of Highscore
// push a object in the array with a key of the name of the player and a value of the highscore

// AFTER this, just set the new array with the latest highscore added, into the LS overwriting the older one
