
// quiz repository
var quizlist = [
    {
        question: "What does CSS stand for?",
        options:["Colorful Style Sheets","Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets"],
        rightAnswer:2
    },
    {
        question: "What does DOM stand for?",
        options:["Document Object Model", "Domain Object Model","Document Optmization Model","Domain Open Model"],
        rightAnswer:0
    }
]

// Randomly select from the quiz list
i = 1;

// result counter
var c = 0;
var w = 0;

// Display qiuz contents on the page

var mainPageHeader = document.querySelector("h2");
mainPageHeader.textContent = quizlist[i].question;

// Create unordered list element
var mainContainer = document.getElementById("main_content");

var list = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = quizlist[i].options[0];
li2.textContent = quizlist[i].options[1];
li3.textContent = quizlist[i].options[2];
li4.textContent = quizlist[i].options[3];

mainContainer.appendChild(list);
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);

// Add answer check and style change when one of the optisons are selected
var bottomText = document.getElementById("bottom_content");

li1.addEventListener("click",function(){
    if (quizlist[i].rightAnswer === 0) {
        li1.setAttribute("class", "correct");
        c++;
        bottomText.textContent = "It's correct! You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    } else {
        li1.setAttribute("class", "wrong");
        w++;
        bottomText.textContent = "It's wrong. You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    };
});

li2.addEventListener("click",function(){
    if (quizlist[i].rightAnswer === 1) {
        li2.setAttribute("class", "correct");
        c++;
        bottomText.textContent = "It's correct! You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    } else {
        li2.setAttribute("class", "wrong");
        w++;
        bottomText.textContent = "It's wrong. You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    };
});

li3.addEventListener("click",function(){
    if (quizlist[i].rightAnswer === 2) {
        li3.setAttribute("class", "correct");
        c++;
        bottomText.textContent = "It's correct! You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    } else {
        li3.setAttribute("class", "wrong");
        w++;
        bottomText.textContent = "It's wrong. You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    };
});

console.log(quizlist[i].rightAnswer);

li4.addEventListener("click",function(){
    if (quizlist[i].rightAnswer === 3) {
        li4.setAttribute("class", "correct");
        c++;
        bottomText.textContent = "It's correct! You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    } else {
        li4.setAttribute("class", "wrong");
        w++;
        bottomText.textContent = "It's wrong. You made " + c + " correct answer(s) and " + w + " wrong answer(s) so far."
    };
});
