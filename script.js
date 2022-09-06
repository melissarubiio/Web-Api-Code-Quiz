var clickHere = document.getElementById ("start");
var winner = document.getElementById ("high-score");
var body = document.getElementById ("body");
var timer = document.getElementById ("timer");
var test = document.getElementById ("test");
var gameOver = document.getElementById ("game-over");
var over = document.getElementById ("over");
var score = document.getElementById ("score");
var timeLeft = 60
var initials = document.getElementById ("initials");
var saveButton = document.getElementById("save");
var questions = document.getElementById("question")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var next = document.getElementById("next")


clickHere.addEventListener("click", function() {
test.style.display = "flex"
});

clickHere.addEventListener("click", function() {
    body.style.display = "none"
});

clickHere.addEventListener("click", function() {
    timer.style.display = "inline"
    setTime()
    });

function setTime() {
    var Interval = setInterval(function() {
        timer.textContent = "COUNTDOWN TIMER:" + timeLeft
        timeLeft--;
        if(timeLeft === 0) {
            clearInterval(Interval);
        }
    }, 1000)
    };



clickHere.addEventListener("click", function() {
    test.style.display = "block";
    next.style.display = "block";
    questions.textContent = "What does JSON do?"
    button1.textContent = "A text-based way of representing JavaScript object literals, arrays, and scalar data."
    button2.textContent = "Makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler"
    button3.textContent = "A computer program that waits for an event to occur"
})

next.addEventListener("click", function() {
    test.style.display = "block";
    next.style.display = "block";
    questions.textContent = "What does JQuery do?"
    button1.textContent = "Makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler"
    button2.textContent = "A property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date"
    button3.textContent = "A computer program that waits for an event to occur"
})

next.addEventListener("click", function() {
    test.style.display = "block";
    next.style.display = "block";
    questions.textContent = 'What is the difference between "==" and "===" in javascript?'
    button1.textContent = "“==” is used to compare both values and types whereas, “ === “ is used to compare values"
    button2.textContent = "“==” is used to compare values whereas, “ === “ is used to compare both values and types"
    button3.textContent = "“==” and “ === “ are both used to compare values and types."
})

    function renderLastRegistered() {
        var initials = localStorage.getItem("initials");
        initials();
    }
    
    saveButton.addEventListener("click", function(event)  {
        event.preventDefault();
      
        var initials = document.querySelector("initials").value;
      
        if (initials === "") {
          displayMessage("error", "Initials cannot be blank");
        } else {
          displayMessage("successfully saved");
          renderLastRegistered()
        localStorage.setItem("initials", initials);
        }
      });
