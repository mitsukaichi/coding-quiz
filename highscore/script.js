// Retrieve historical score from the local storage and reorder by the score
resultHistory = JSON.parse(localStorage.getItem("codingquizresult"));
console.log(resultHistory);

// reorder highscore arrays by the score

// Show high scores on the page
var highScoreResult = document.getElementById("highscoreresult");
console.log(highScoreResult);
highScoreResult.textContent = resultHistory;