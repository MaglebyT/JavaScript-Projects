

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl = document.getElementById("home-score")

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestStoreEl = document.getElementById("guest-score")

let resetButton = document.getElementById("reset-button")
let cheatButton = document.getElementById("cheat-button")

let homeScore = 0
let guestScore = 0

// Reset and Cheat buttons. Cheat +3 to Home, -3 from Guest

function resetScores(){
  homeScore = 0
  guestScore = 0
  homeStoreEl.textContent = homeScore
  guestStoreEl.textContent = guestScore
}  

function cheatScores(){
    homeScore += 3
    guestScore -= 3
    homeStoreEl.textContent = homeScore
    guestStoreEl.textContent = guestScore
  }  
  
// Home Score Buttons  

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
    winningTeam()
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
    winningTeam()
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
    winningTeam()
}

// Guest Score Buttons

function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
    winningTeam()
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
    winningTeam()
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
    winningTeam()
}