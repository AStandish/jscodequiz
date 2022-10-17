const startbutton = document.getElementById("startbutton")
const startdiv = document.getElementById("startdiv")
const formdiv = document.getElementById("formdiv")
const scorediv = document.getElementById("scorediv")
const questiondiv= document.getElementById("questiondiv")
const questionheader= document.getElementById("questionheader")
const choice1= document.getElementById("choice1")
const choice2= document.getElementById("choice2")
const choice3= document.getElementById("choice3")
const choice4= document.getElementById("choice4")

startbutton.addEventListener("click", function(){
    startdiv.classList.add("hidden")
    questiondiv.classList.remove("hidden")
    questionheader.textContent="ssss"
}) 