const startbutton = document.getElementById("startbutton");
const startdiv = document.getElementById("startdiv");
const formdiv = document.getElementById("formdiv");
const scorediv = document.getElementById("scorediv")
const questiondiv = document.getElementById("questiondiv");
const questionheader = document.getElementById("questionheader")
const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")
const choice3 = document.getElementById("choice3")
const choice4 = document.getElementById("choice4")
let index = 0;



const questions = [{
    name: 'What is the command to add a file in Git Bash?', answer: 1,
    options: ['git status', 'git add', 'git merge', 'git branch']
}, {
    name: 'What is the HTML tag for header?', answer: 0,
    options: ['<header>', '<h1>', '<footer>', '<h2>']
}, {
    name: 'What is the name for a JavaScript variable that cannot be reassigned?', answer: 1,
    options: ['let', 'const', 'variable', 'html']
}];

function renderQuestion() {
    const question = questions[index];
    questionheader.textContent = question.name;
    choice1.textContent = question.options[0];
    choice2.textContent = question.options[1];
    choice3.textContent = question.options[2];
    choice4.textContent = question.options[3];
}
questiondiv.addEventListener("click", function() {

});

startbutton.addEventListener("click", function() {
    startdiv.classList.add("hidden")
    questiondiv.classList.remove("hidden")
    renderQuestion(); 
}); 