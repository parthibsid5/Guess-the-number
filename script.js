let randomNum = parseInt((Math.random() * 100) + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const loworhi = document.querySelector(".loworhi")
const startover = document.querySelector(".resultParas")
const p = document.createElement("p")

let prevguess = []
let numguess = 1
let playgame = true

if (playgame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    //check if guess is eligible for submitting
    if(isNaN(guess))
    {
        alert('Please enter a number')
    }else if(guess <1)
    {
        alert('Number is less than 1')
    }
    else if(guess > 100){
        alert ('Number is greater than 100');
    }
    else{
        prevguess.push(guess)
        if(numguess ===10)
        {
            displayGuess(guess)
            displayMessage(`Game Over .. The random number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //check if guess matches the random value
    if(guess === randomNum){
        displayMessage(`You guessed it Right`)
        endGame()
    }else if(guess < randomNum){
        displayMessage("Number is Tooo low")
    }
    else if(guess > randomNum){
        displayMessage("Number is Too high")
    }
}

function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}

function displayMessage(message) {
    loworhi.innerHTML=`<h2>${message}<h2>`
}

function endGame() {
    userInput.value=''
    userInput.setAttribute('disables','')
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame"> Start new Game</h2>`;
    startover.appendChild(p)
    playgame=false
    newGame()
}

function newGame() {
    const newGameButton=document.querySelector("#newGame")
    newGameButton.addEventListener("click",()=>{
        randomNum = parseInt((Math.random() * 100) + 1)
        prevguess=[]
        numguess=1
        guessSlot.innerHTML=''
        remaining.innerHTML`${11-numguess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playgame=true
    })
}

