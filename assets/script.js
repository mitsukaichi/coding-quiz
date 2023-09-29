//  counter
var i = 0;
var point = 0;

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
var startButton = document.getElementById("startbutton");
startButton.addEventListener("click",function(){
    i = 0;
    newQuiz();
    setTime();
});

// Switch to time out screen when the remaining second is 0 

var resultInput = document.getElementById("result_input");

function timeOver() {
    mainPageHeader.textContent = "Time is up!"
    mainContainer.textContent = "You earned " + point + " points."
    resultInput.setAttribute("class","display");
};

// Send the data to local storage upon submit button click
var submitButton = document.getElementById("submitbutton");
var userName = document.querySelector("input");
submitButton.addEventListener("click",function(){
    console.log(userName.value);
})

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
        point++;
        bottomText.textContent = "You're right! You've earned " + point + " points so far."
    } else {
        listNum.setAttribute("class", "wrong");
        if (secondsLeft > 9) {
            secondsLeft = secondsLeft - 9;
        } else {
            secondsLeft = 1;
            return;
        };
        bottomText.textContent = "Hmmm, it's wrong."
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
    {
        question: "What is the HTML attribute to store extra information on standard, semantic HTML elements?",
        options:["extrainfo", "data","meta","id"],
        rightAnswer:1
    },
    {
        question: "Which javascript proparty is a reference to the object onto which the event was dispatched?",
        options:["object", "reference","event","target"],
        rightAnswer:3
    },
    {
        question: "Which read-only property of the HTMLElement provides read/write access to custom data attributes (data-*) on elements?",
        options:["dataset", "getdata","customdata","dataattribute"],
        rightAnswer:0
    },
    {
        question: "Which method of the Element interface tests whether the element would be selected by the specified CSS selector?",
        options:["pretend()", "check()","matches()","test()"],
        rightAnswer:2
    },
    {
        question: "Which HTML object allows you to save key/value pairs in the browser?",
        options:["localStorage", "keyValuePair","browserStorage","windowStorage"],
        rightAnswer:0
    },
    {
        question: "What is the correct CSS to allow the items to wrap onto multiple lines, from top to bottom?",
        options:["flex: wrap;", "flex-wrap: wrap;","display: flex-wrap;","flex-wrap: wrap-reverse;"],
        rightAnswer:1
    },
    {
        question: "Which HTML element creates web-based forms to accept data from the user?",
        options:["<form>", "<data>","<forms>","<input>"],
        rightAnswer:3
    },
    {
        question: "Which javascript code gets a value user submitted to the form with an id input_form?",
        options:["document.getElementById('input_form').form", "document.getElementById('input_form')","document.getElementById('input_form').value","document.getInputById('input_form')"],
        rightAnswer:2
    },
    {
        question: "In which format format keys and values stored in with localStorage?",
        options:["string", "boolean","numeric","object"],
        rightAnswer:0
    },
]