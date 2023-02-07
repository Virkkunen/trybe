const answer = document.getElementById('answer');
const score = document.getElementById('score');
let guessColor;

function genColor() {
  const hex = '0123456789ABCDEF';
  let hexCode = '#';
  for (let i = 0; i < 6; i += 1) {
    hexCode += hex[Math.floor(Math.random() * 16)];
  }
  return hexCode;
}

function setColors() {
  const balls = document.getElementsByClassName('ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = genColor();
  }
  guessColor = balls[Math.floor(Math.random() * 6)].style.backgroundColor;
}

function saveScore() {
  localStorage.setItem('score', score.innerText);
}

function loadScore() {
  if (!localStorage.getItem('score')) return;
  score.innerText = localStorage.getItem('score');
}

function correctGuess() {
  score.innerText = Number(score.innerText) + 1;
  saveScore();
}

function checkColor(color) {
  if (color === guessColor) {
    answer.innerText = 'Correct!';
    answer.style.color = '#9EC49F';
    correctGuess();
  } else {
    answer.innerText = 'Wrong! Try again.';
    answer.style.color = '#C49EA0';
  }
}

function checkIfColor(e) {
  if (!e.target.classList.contains('ball')) return;
  const color = e.target.style.backgroundColor;
  checkColor(color);
}

function setGuessColor() {
  const rgbColor = document.getElementById('rgb-color');
  rgbColor.innerText = guessColor.replace(/[a-z]/gi, '');
}

function startGame() {
  loadScore();
  setColors();
  setGuessColor();
}

function resetGame() {
  answer.innerText = 'Pick a color';
  answer.style.color = '#cacaca';
  setColors();
  setGuessColor();
}

// Events
window.addEventListener('load', startGame);
document.addEventListener('click', checkIfColor);
document.getElementById('reset-game').addEventListener('click', resetGame);
