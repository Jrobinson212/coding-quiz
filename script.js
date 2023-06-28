//storing html elements as variables
var timer = document.querySelector(".timer")
var highScore = document.getElementById("highscore-btn")
var startBtn = document.getElementById("startBtn")
var submitBtn = document.getElementById("submit")
var userAnswers = document.getElementById("user-answers")
var quizComplete = document.getElementById("quiz-complete")
var storeIntials = document.getElementById("store-initals")
var questionDoc = document.getElementById("question-doc")
var goBack = document.getElementById("return")



//Global variables
var time = 0;
var score = 0;
var initals = "";
var questionIndex  ;
var count = 61;
var countdown;

//Generating questions
var questions =[
    {
        question: "Commonly used data types DO Not Include:" ,
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "Curly brackets"
    },
    {
        question: "Arrays in javaScccript can be used to store _____.",
        choices: ["numbers and string", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Sting values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brqackets", "quotes", "parenthesis"],
        answer: "Parenthesis"
    },
    {
        question: "A very useful tool used during development ans debugging for printing content tp the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "Console log"  
    }
]


function showQuestion(){
    var question = questions[questionIndex]
    questionDoc.innerText = question.text
    for (var i = 0; i < questionchoice.length; i++) {
        choicebuttons[i].innertext = question.choices[i]
    } 
}
//starting quiz
function start()0