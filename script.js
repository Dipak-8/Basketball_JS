let Score1 = document.getElementById("score1")
console.log(Score1)
let Score2 = document.getElementById("score2")
console.log(Score2)

let count1 = 0
let count2 = 0

var score1Color = document.getElementById("score1")
var score2Color = document.getElementById("score2")

function homeAdd1() {
  count1 = count1 + 1
  Score1.textContent = count1
  checkScores()
}

function homeAdd2() {
  count1 = count1 + 2
  Score1.textContent = count1 
  checkScores()
}

function homeAdd3() {
  count1 = count1 + 3
  Score1.textContent = count1
  checkScores()
}

function guestAdd1() {
  count2 = count2 + 1
  Score2.textContent = count2 
  checkScores()
}

function guestAdd2() {
  count2 = count2 + 2
  Score2.textContent = count2
  checkScores()
}

function guestAdd3() {
  count2 = count2 + 3
  Score2.textContent = count2
  checkScores()
}

function checkScores() {
  if (count2 > count1) {
    score1Color.style.backgroundColor = 'Black';
    score2Color.style.backgroundColor = 'Yellow';
  }
  else if(count2 < count1) {
    score1Color.style.backgroundColor = 'Yellow';
    score2Color.style.backgroundColor = 'Black';
  }
  else {
    score2Color.style.backgroundColor = 'Black';
    score1Color.style.backgroundColor = 'Black';
  }
}