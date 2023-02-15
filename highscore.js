var winner = document.getElementById("high-score");
var saveButton = document.getElementById("save");
var initials = document.getElementById("initials");
var score = 0;

// Listen for the save button to be clicked
saveButton.addEventListener("click", function() {
  // Get the value of the initials input field
  var playerInitials = initials.value;

  // Check if there are existing high scores in local storage
  if (localStorage.getItem("highScores")) {
    // Get the existing high scores
    var highScores = JSON.parse(localStorage.getItem("highScores"));

    // Add the new score to the high scores array
    highScores.push({ initials: playerInitials, score: score });

    // Sort the high scores array in descending order by score
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });

    // Save the updated high scores array to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  } else {
    // Create a new high scores array with the first score
    var highScores = [{ initials: playerInitials, score: score }];

    // Save the high scores array to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  // Update the high score list display
  updateHighScoreList();
});

// Function to update the high score list display
function updateHighScoreList() {
  // Get the high scores from local storage
  var highScores = JSON.parse(localStorage.getItem("highScores"));

  // Clear the current high score list
  winner.innerHTML = "";

  // Loop through the high scores array and add each score to the list
  for (var i = 0; i < highScores.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = highScores[i].initials + ": " + highScores[i].score;
    winner.appendChild(li);
  }
}

// Call the updateHighScoreList function to display any existing high scores
updateHighScoreList();
