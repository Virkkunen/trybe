const textInput = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');

function showText() {
  const preview = document.getElementById('meme-text');
  preview.innerText = textInput.value;
}

function showImg() {
  const preview = document.getElementById('meme-image');
  preview.src = URL.createObjectURL(imgInput.files[0]);
}

function fire() {
  container.style.border = '3px dashed red';
}

function water() {
  container.style.border = '5px double blue';
}

function earth() {
  container.style.border = '6px groove green';
}

function buttons(e) {
  if (e.target.id === 'fire') fire();
  if (e.target.id === 'water') water();
  if (e.target.id === 'earth') earth();
}

function clearInputs() {
  textInput.value = '';
  imgInput.value = '';
  URL.revokeObjectURL(imgInput.src);
}

function showDefImg(e) {
  const preview = document.getElementById('meme-image');
  preview.src = e.target.src;
}

// events
document.addEventListener('click', buttons);
document.addEventListener('click', showDefImg);
textInput.addEventListener('input', showText);
imgInput.addEventListener('change', showImg);
window.addEventListener('load', clearInputs);
