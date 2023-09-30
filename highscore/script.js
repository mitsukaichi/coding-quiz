// Retrieve historical score from the local storage and reorder by the score
resultHistory = JSON.parse(localStorage.getItem("codingquizresult"));

// reorder highscore arrays by the score
/* pseudo-code
1. Take first item in the list, check the score of that item
2. Add that item to the first place in the reordered list
3. Take the second item in the list, check if the score of that item is larger than the score of the first item in the reordered list
4. If yes, add that item to the first place and push the remaining item in the list further down
5. If not, check the score of the second item in the list, go through the process until the end of the reordered list
6. If the item was not added to anywhere in the list, add the item to the end of the list
7. Once the process 3 - 5 is done for the all items in the original list, return the reordered list
*/
var resultOrderedByScore = [];

for (i = 0; i < resultHistory.length; i++) {
    var added = false;
    for (j = 0; j < resultOrderedByScore.length; j++){
        if (resultHistory[i].score > resultOrderedByScore[j].score){
            resultOrderedByScore.splice(j,0,resultHistory[i]);
            added = true;
            break;
        };
    };
    if (added === false) {
        resultOrderedByScore.push(resultHistory[i]);
    };
};

// Show high scores on the page
var showHighScoreList = document.querySelector("ol")

for (i = 0; i < resultOrderedByScore.length; i++){
    list = document.createElement("li");
    list.textContent = resultOrderedByScore[i].score + " points by " + resultOrderedByScore[i].userName;
    showHighScoreList.appendChild(list);
};

