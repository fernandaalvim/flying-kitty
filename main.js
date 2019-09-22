// BEFORE WE START

const meow = new Audio('audio/Cat-sound-effect.mp3')

const cat = document.querySelector("div");
let speech = document.querySelector("#speech");

let s1 = 0;
let s2 = 0;

let playerOne = prompt("Catcher");
let playerTwo = prompt("Cat");

pOne.textContent = playerOne;
pTwo.textContent = playerTwo;

const reload = document.querySelector("#reload");

let gameTime;
let myTimeout;

// let's try to make a start button




// STEP 1
// MAKE THE FLYING CAT
// (and control it with the keyboard)

document.addEventListener("keydown",move);

let topValue = 0;
let leftValue = 0;

function move(event) {
    console.log(event.code);
    if (event.code === "ArrowDown") {
        topValue+=5;
        if (topValue >= 85) {
            topValue = 0;
        }
    }
    document.querySelector("#stuck").style.top = topValue + "%";
    //arrow right
    if (event.code === "ArrowRight") {
        leftValue+=5;
        if (leftValue >= 95) {
            leftValue = 0;
        }
    }
    document.querySelector("#stuck").style.left = leftValue + "%";
    
    //arrow up
    if (event.code === "ArrowUp") {
        topValue-=5;
        if (topValue < 0) {
            topValue = 85;
        }
    }
    document.querySelector("#stuck").style.top = topValue + "%";
    
    //arrow left
    if (event.code === "ArrowLeft") {
        leftValue-=5;
        if (leftValue < 0) {
            leftValue = 95;
        }
    }
    document.querySelector("#stuck").style.left = leftValue + "%";
}

// STEP 2 
// INSERT A NEW PLAYER
// (who is going to try to catch the flying cat)


function touched(e) {
    console.log("gotcha");
    s1++;
    console.log(s1);
    sOne.textContent = s1;
    meow.play();
    window.clearTimeout(gameTime);
    if (s1===5) {
        alert(playerOne + " won!");
        speech.style.display = "block";
        cat.style.backgroundImage = "url('img/cats/5 - devil.png')"
        document.removeEventListener("keydown", move);
    } 
}
//
// how can the cat win?


setTimeout(function(){
    catsVictory();
    setTimeout(arguments.callee, 30000);
});

function catsVictory(e) {
    console.log("fast kitty!");
    s2++;
    console.log(s2);
    sTwo.textContent = s2;
   if (s2 === 5) {
    alert(playerTwo + " won!");
    speech.style.display = "block";
    speech.style.backgroundImage = "url('img/speeches/catwon.png')";
    cat.style.backgroundImage = "url('img/cats/yo.png')"
    document.removeEventListener("keydown", move);
    } 
}

// to start again
    reload.addEventListener("click", function(e) {
        document.location.reload();
    } )
//

cat.addEventListener("click", touched);


// trying to set the timer