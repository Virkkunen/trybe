const colors = [];
const divs = document.getElementsByClassName('color');
const board = document.getElementById('pixel-board');

function sendColorToArray(color) {
  colors.push(color);
  return colors;
}

function saveColors(arr) {
  localStorage.setItem('colorPalette', JSON.stringify(arr));
}

function restoreColors() {
  if (!localStorage.getItem('colorPalette')) return;
  const arr = JSON.parse(localStorage.getItem('colorPalette')); // volta string pra array
  for (let i = 0; i < arr.length; i += 1) {
    divs[i + 1].style.backgroundColor = arr[i];
  }
}

function saveBoard(size) {
  localStorage.setItem('boardSize', size);
}

function randomHexCode() {
  // função pega um índice de 1 a 16 dessas cores e coloca numa string
  const hex = '0123456789ABCDEF';
  let hexCode = '#';

  for (let i = 0; i < 6; i += 1) {
    hexCode += hex[Math.floor(Math.random() * 16)];
  }

  return hexCode;
}

function randomColors() {
  colors.length = 0;

  for (let i = 1; i < divs.length; i += 1) {
    const color = randomHexCode();
    divs[i].style.backgroundColor = color;
    sendColorToArray(color);
  }
  saveColors(colors);
}

function savePixelsStyle() {
  localStorage.removeItem('pixelBoard');
  const pixels = document.getElementsByClassName('pixel');
  const savedPixels = [];
  for (let i = 0; i < pixels.length; i += 1) {
    savedPixels.push(window.getComputedStyle(pixels[i]).getPropertyValue('background-color'));
  }
  localStorage.setItem('pixelBoard', JSON.stringify(savedPixels));
}

function selectColor(color) {
  // remover selected dos outros
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i].classList.contains('selected')) {
      divs[i].classList.remove('selected');
    }
  }
  color.classList.add('selected');
}

function paintPixel(pixel) {
  const selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  const selPixel = pixel;
  selPixel.style.backgroundColor = selectedColor;
  savePixelsStyle();
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '';
  }
  localStorage.removeItem('pixelBoard');
}

// mais fácil gerar a board no js do que html pros requisitos bonus
function genBoard(num) {
  board.innerHTML = '';
  const size = typeof (num) === 'number' ? num * num : 25;
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
  board.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 40px)`;
}

function genBoardValidation() {
  const boardSize = document.getElementById('board-size').value;
  if (!boardSize) {
    alert('Board inválido!');
  } else if (boardSize < 5) {
    saveBoard(5);
    genBoard(5);
  } else if (boardSize > 50) {
    saveBoard(50);
    genBoard(50);
  } else {
    saveBoard(Number(boardSize));
    genBoard(Number(boardSize));
  }
}

function restoreSize() {
  if (!localStorage.getItem('boardSize')) return;
  const size = localStorage.getItem('boardSize');
  genBoard(Number(size));
}

function restorePixels() {
  if (!localStorage.getItem('pixelBoard')) return;
  const savedPixels = JSON.parse(localStorage.getItem('pixelBoard'));
  const pixels = document.getElementsByClassName('pixel'); // eu já declarei isso umas 20 vezes
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = savedPixels[i];
  }
}

// Event bubbling
function bubble2(evt) {
  if (evt.target.id === 'generate-board') genBoardValidation();
}

function bubble(evt) {
  if (evt.target.id === 'button-random-color') randomColors();
  if (evt.target.classList.contains('color')) selectColor(evt.target);
  if (evt.target.classList.contains('pixel')) paintPixel(evt.target);
  if (evt.target.id === 'clear-board') clearBoard();
  bubble2(evt);
}

document.addEventListener('click', bubble);

// document.getElementById('button-random-color').addEventListener('click', randomColors);

window.addEventListener('load', restoreColors);
window.addEventListener('load', genBoard);
window.addEventListener('load', restoreSize);
window.addEventListener('load', restorePixels);
