// GLOBAL 

// Crystals
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };
  
  // Scores
  var currentScore = 0;
  var targetScore = 0;
  
  // Wins-Losses Counter
  var winCount = 0;
  var lossCount = 0;
  
  
  // FUNCTIONS
  
  // function for random numbers
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Starting and restarting the game
  // the player starts with 0, the target is a random number between 19 and 120
  // the crystals are each worth between 1 and 12 points, randomly determined at each reset
  var startGame = function() {
    currentScore = 0;
    targetScore = getRandom(19, 120);
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
  
    // Change the HTML 
    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);
  
  
    // Testing Console
    console.log("-----------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
      " | Yellow: " + crystal.yellow.value);
    console.log("-----------------------------------");
  };
  
  //If the player's score becomes higher than the target, the player has lost
  //If the player can make their score equal to the target, the player has won
  //Display a win or lost message
  //add the wins/losses to the counter, then change the HTML
  //restart the game
  var checkWin = function() {
    if (currentScore > targetScore) {
      alert("Sorry. You lost!");
      console.log("You Lost");
      lossCount++;
      $("#loss-count").text(lossCount);
      startGame();
    }
  
    else if (currentScore === targetScore) {
      alert("Congratulations! You Won!");
      console.log("You Won!");
      winCount++;
      $("#win-count").text(winCount);
      startGame();
    }
  
  };
  
  // Clicking a crystal changes the currentScore, HTML should reflect it
  var addValues = function(clickedCrystal) {
    currentScore += clickedCrystal.value;
    $("#your-score").text(currentScore);
  
    // Call the checkWin Function
    checkWin();
  
    // Testing Console
    console.log("Your Score: " + currentScore);
  };
  
  // MAIN PROCESS
  // Starts the Game the First Time.
  startGame();
  
  $("#blue").click(function() {
    addValues(crystal.blue);
  });
  
  $("#red").click(function() {
    addValues(crystal.red);
  });
  
  $("#green").click(function() {
    addValues(crystal.green);
  });
  
  $("#yellow").click(function() {
    addValues(crystal.yellow);
  });
  