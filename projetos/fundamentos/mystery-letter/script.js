const letter = document.getElementById('carta-gerada');
// const genBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');

function ranNum(max) {
  return Math.floor(Math.random() * max);
}

function randomClass() {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotate = ['rotateleft', 'rotateright'];
  const skew = ['skewleft', 'skewright'];
  const classes = `${style[ranNum(3)]} ${size[ranNum(3)]} ${rotate[ranNum(2)]} ${skew[ranNum(2)]}`;
  return classes;
}

function spanWords(word) {
  const span = document.createElement('span');
  span.innerText = word;
  span.className = randomClass();
  letter.appendChild(span);
}

function createLetter() {
  const savedInput = input.value;
  if (!savedInput || savedInput.trim().length === 0) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const words = input.value.split(' ');
    letter.innerHTML = '';
    for (let i = 0; i < words.length; i += 1) {
      spanWords(words[i]);
    }
    input.value = savedInput;
    document.getElementById('carta-contador').innerText = words.length;
  }
}

function changeStyle(e) {
  e.className = randomClass();
}

// Events
function bubble01(e) {
  if (e.target.id === 'criar-carta') createLetter();
  if (e.target.matches('span')) changeStyle(e.target);
}

function clearInputs() {
  input.value = '';
}

document.addEventListener('click', bubble01);
window.addEventListener('load', clearInputs);
