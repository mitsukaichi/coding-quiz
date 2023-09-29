//  counter
var i = 0;
var c = 0;
var w = 0;

// Create a timer function that starts at the start button click

var secondsLeft = 60;
var remainingTime = document.querySelector("#remaining_time");

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    remainingTime.textContent = secondsLeft;
    if(secondsLeft === 0) {
     clearInterval(timerInterval);
     timeOver();
    }
  }, 1000);
};


// Start the quiz at the click of the start button
var startButton = document.querySelector("button");
startButton.addEventListener("click",function(){
    i = 0;
    newQuiz();
    setTime();
});

// Switch to time out screen when the remaining second is 0 

function timeOver() {
    mainPageHeader.textContent = "Time is over!"
    mainContainer.textContent = "You made " + c + " correct answers and " + w + " wrong answers."
};

// Display qiuz contents on the page
// Create unordered list element
var mainPageHeader = document.querySelector("h2");
var mainContainer = document.getElementById("main_content");

var list = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Show new quiz
function newQuiz() {
    mainPageHeader.textContent = quizList[i].question;
    li1.textContent = quizList[i].options[0];
    li2.textContent = quizList[i].options[1];
    li3.textContent = quizList[i].options[2];
    li4.textContent = quizList[i].options[3];
    mainContainer.appendChild(list);
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);
};

// Add answer check and style change when one of the optisons are selected
var bottomText = document.getElementById("bottom_content");

function answerSelect(listNum, rightAnswerLocation) {
    if (quizList[i].rightAnswer === rightAnswerLocation) {
        listNum.setAttribute("class", "correct");
        c++;
        bottomText.textContent = "It's correct! You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    } else {
        listNum.setAttribute("class", "wrong");
        w++;
        secondsLeft = secondsLeft - 9;
        bottomText.textContent = "It's wrong. You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    };
    // Prevent from users to click again
    list.setAttribute("style","pointer-events: none;");
    // Wait for one second and show new quiz
    setTimeout(function(){
        if (i < quizList.length - 1){
            i++;
            newQuiz();
            listNum.setAttribute("class", "");
            bottomText.textContent = "";
            list.setAttribute("style","pointer-events: auto;");
        } else {
            // Ask user to wait when there is no more questions 
            mainPageHeader.textContent = "";
            mainContainer.textContent = "There is no more quiz, sorry! Please wait until the remaining time becomes 0.";
            bottomText.textContent = "";
        }

    },1000)
};

// Perform the answer check function at the click of each item
li1.addEventListener("click",function(event){
    answerSelect(li1,0);
});

li2.addEventListener("click",function(event){
    answerSelect(li2,1);
});

li3.addEventListener("click",function(event){
    answerSelect(li3,2);
});

li4.addEventListener("click",function(event){
    answerSelect(li4,3);
});

// quiz repository
var quizList = [
    {
        question: "What does CSS stand for?",
        options:["Colorful Style Sheets","Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets"],
        rightAnswer:2
    },
    {
        question: "What does DOM stand for?",
        options:["Document Object Model", "Domain Object Model","Document Optmization Model","Domain Open Model"],
        rightAnswer:0
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options:["javascript", "js","script","style"],
        rightAnswer:2
    },
    {
        question: "What is it called to use a variable before it has been declared in Javascript?",
        options:["slack out", "console log out","empty declare","hoist"],
        rightAnswer:3
    },
    {
        question: "What is the javasript method to display an alert box with a message and an OK button?",
        options:["prompt", "alert","confirm","warn"],
        rightAnswer:1
    },
    {
        question: "Which method returns the first Element that matches the specified selector, or group of selectors?",
        options:["querySelector()", "querySelectorAll()","queryCommandState()","getSelection()"],
        rightAnswer:0
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options:["break", "line","br","hr"],
        rightAnswer:2
    },
    {
        question: "What is the correct CSS for adding a background color?",
        options:["color: yellow;", "background-color: yellow;","background: yellow;","backgroundcolor: yellow;"],
        rightAnswer:1
    },
    {
        question: "What is the correct CSS to enable a flex context for all its direct children?",
        options:["flexbox: true;", "flex-box: true;","display: flex;","display: flex-box;"],
        rightAnswer:2
    },
    {
        question: "What is the correct CSS to order items in the flex container left to right?",
        options:["flex-direction: row;", "flex-direction: row-reverse;","flex-direction: column;","flex-direction: column-reverse;"],
        rightAnswer:0
    },
    {
        question: "What is the correct CSS to distribute items evenly in the line along the main axis?",
        options:["justify-content: center;", "align-content: center;","align-content: space-between;","justify-content: space-between;"],
        rightAnswer:3
    },
]