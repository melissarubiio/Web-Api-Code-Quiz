var winner = document.getElementById ("high-score");
var body = document.getElementById ("body");
var timer = document.getElementById ("timer");
var gameOver = document.getElementById ("game-over");
var over = document.getElementById ("over");
var score = document.getElementById ("score");
var timeLeft = 60
var initials = document.getElementById ("initials");
var saveButton = document.getElementById("save");
var clickHere = document.getElementById ("start");
var questionaire = document.getElementById ("questionaire");



clickHere.addEventListener("click", function() {
    body.style.display = "none"
});

clickHere.addEventListener("click", function() {
    questionaire.style.display = "block"
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




const Questions = [{
        id: 0, 
        q: "What does JSON do?",
        a: [{ text: "A text-based way of representing JavaScript object literals, arrays, and scalar data.", isCorrect: true },
            { text: "Makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler", isCorrect: false},
            { text: "A computer program that waits for an event to occur", isCorrect: false },
    ]
    },
    {
        id: 1, 
        q: "What does JQuery do?",
        a: [{ text: "A property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date", isCorrect: true },
            { text: "Makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler", isCorrect: false},
            { text: "A computer program that waits for an event to occur", isCorrect: false },
    ]
    },
    {
        id: 2, 
        q: "What is the difference between '==' and '===' in javascript?",
        a: [{ text: "“==” is used to compare both values and types whereas, “ === “ is used to compare values", isCorrect: false },
            { text: "“==” is used to compare values whereas, “ === “ is used to compare both values and types", isCorrect: true},
            { text: "“==” and “ === “ are both used to compare values and types.", isCorrect: false },
    ]
    }
    ]

clickHere.addEventListener ("click", function() {
        iterate("0");
    });

    function iterate(id) {
        var quiz = document.getElementsByClassName ("quiz");
        quiz[0].innerText = "";
    
        const question = document.getElementById("question");
    
        question.innerText = Questions[id].q;
      
        const button1 = document.getElementById('button1');
        const button2 = document.getElementById('button2');
        const button3 = document.getElementById('button3');
    
        button1.innerText = Questions[id].a[0].text;
        button2.innerText = Questions[id].a[1].text;
        button3.innerText = Questions[id].a[2].text;
      
        button1.value = Questions[id].a[0].isCorrect;
        button2.value = Questions[id].a[1].isCorrect;
        button3.value = Questions[id].a[2].isCorrect;

        var selected = "";
    
        button1.addEventListener("click", () => {
            if(button1.style.backgroundColor == "var(--sage)"){
                button1.style.backgroundColor = "white"
                return
            }
            button1.style.backgroundColor ="var(--sage)" ;
            selected = button1.value;
        })
      
        button2.addEventListener("click", () => {
            if(button2.style.backgroundColor == "var(--sage)"){
                button2.style.backgroundColor = "white"
                return
            }
            button2.style.backgroundColor = "var(--sage)";
            selected = button2.value;
        })
      
        button3.addEventListener("click", () => {
            if(button3.style.backgroundColor == "var(--sage)"){
                button3.style.backgroundColor = "white"
                return
            }
            button3.style.backgroundColor = "var(--sage)";
            selected = button3.value;
        })
        const submit = document.getElementsByClassName("submit");
      
        submit[0].addEventListener("click", () => {
            if (selected == "true") {
                document.getElementById ("t-f").textContent = "true";
            } else {
                document.getElementById ("t-f").textContent = "false";
            }
        })
        console.log(id)
    }
    
    
    

    const next = document.getElementsByClassName('next')[0];
    var id = 0;
      
    next.addEventListener("click", () => {
        start = false;
        if (id < 2) {
            id++;
            iterate(id);
            console.log(id);
        }
      
    })





    function renderLastRegistered() {
        var initials = localStorage.getItem("initials");
        initials();
    }
    
    saveButton.addEventListener("click", function(event)  {
        event.preventDefault();
      
        var initials = document.getElementById("Initials").value;
      
        if (initials === "") {
          alert("error", "Initials cannot be blank");
        } else {
          alert("successfully saved");

        localStorage.setItem("initials", initials);
        renderLastRegistered()
        }
      });
