
let randNum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuesses = []
let numGuesses = 1
let playGame = true


// Sabse pahle Ckeck kare app Availavel hai ki nahi
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess === '' || isNaN(guess) || guess > 100 || guess < 1) {
        alert('Please enter a valid number')
    } else {
        // Array mai Push Kar Late Hai PreviousGuss[]
        previousGuesses.push(guess)
        if (numGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randNum) {
        displayMessage(`Congratulations! You got it right!`)
        endGame()
    } else if (guess < randNum) {
        displayMessage(`Wrong! The number is too low`)
    } else if (guess > randNum) {
        displayMessage(`Wrong! The number is too high`)
    }
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML +=`${guess}  `
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton =document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randNum = parseInt(Math.random() * 100 + 1)
        previousGuesses = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        lowOrHi.innerHTML = ''
        playGame = true

    })
}
function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    resultParas.appendChild(p)
    playGame = false
    newGame()
}










