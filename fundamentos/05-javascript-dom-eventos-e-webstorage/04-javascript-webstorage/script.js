// Storage
window.addEventListener('load', function() {
  if (localStorage.length < 1) return;
  console.log('getting data from localStorage');
  console.log(localStorage)

  if (localStorage.font) {
    changeFont(localStorage.font)
  }
});

// Colors
function changeGruvDark() {
  document.body.className = 'gruvboxBgDark0';
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  const config = document.getElementById('config');

  header.className = 'gruvboxBgDark1 gruvboxFgDark';
  main.className = 'gruvboxFgDark';
  config.className = 'configs gruvboxBgDark2';
}

function changeGruvLight() {
  document.body.className = 'gruvboxBgLight0';
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  const config = document.getElementById('config');

  header.className = 'gruvboxBgLight1 gruvboxFgLight';
  main.className = 'gruvboxFgLight';
  config.className = 'configs gruvboxBgLight2';
}

function changeNordDark() {
  document.body.className = 'nordBgDark0';
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  const config = document.getElementById('config');

  header.className = 'nordBgDark1 nordFgDark';
  main.className = 'nordFgDark';
  config.className = 'configs nordBgDark2';
}

function changeNordLight() {
  document.body.className = 'nordBgLight0';
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  const config = document.getElementById('config');

  header.className = 'nordBgLight1 nordFgLight';
  main.className = 'nordFgLight';
  config.className = 'configs nordBgLight2';
}

function changeColor(evt) {
  if (!evt.target.checked) return;
  console.log(evt.target.value);
  const theme = evt.target.value;
  localStorage.setItem('theme', theme);
  if (theme === 'gruvboxDark') {
    changeGruvDark();
  } else if (theme === 'gruvboxLight') {
    changeGruvLight();
  } else if (theme === 'nordDark') {
    changeNordDark();
  } else if (theme === 'nordLight') {
    changeNordLight();
  }
}

function radioButtonsColor() {
  const btns = document.querySelectorAll('input[name="color"]');
  for (let btn of btns) {
    btn.addEventListener('click', changeColor);
  }
}

radioButtonsColor();

// Fonts
function changeFontSans() {
  const header = document.getElementById('header');
  const main = document.getElementById('main');

  header.classList.remove('serif', 'monospace');
  header.classList.add('sans');
  main.classList.remove('serif', 'monospace');
  main.classList.add('sans');
}

function changeFontSerif() {
  const header = document.getElementById('header');
  const main = document.getElementById('main');

  header.classList.remove('sans', 'monospace');
  header.classList.add('serif');
  main.classList.remove('sans', 'monospace');
  main.classList.add('serif');
}

function changeFontMono() {
  const header = document.getElementById('header');
  const main = document.getElementById('main');

  header.classList.remove('serif', 'sans');
  header.classList.add('monospace');
  main.classList.remove('serif', 'sans');
  main.classList.add('monospace');
}

function changeFont(evt) {
  let font;
  if (typeof(evt) == 'string') {
    font = evt;
  } else {
    font = evt.target.value;
  }
  console.log(font);
  localStorage.setItem('font', font);
  if (font === 'sans') {
    changeFontSans();
  } else if (font === 'serif') {
    changeFontSerif();
  } else if (font === 'mono') {
    changeFontMono();
  }
}

function radioButtonsFont() {
  const btns = document.querySelectorAll('input[name="font"]');
  for (let btn of btns) {
    btn.addEventListener('click', changeFont);
  }
}

radioButtonsFont();

// Font size
function changeFontSize(evt) {
  const fontSize = `${evt.target.value}px`
  console.log(fontSize)
  localStorage.setItem('fontSize', fontSize);
  const div = document.getElementById('text');
  div.style.fontSize = fontSize;
}

function changeLineHeight(evt) {
  const lineHeight = `${evt.target.value}px`
  console.log(lineHeight)
  localStorage.setItem('lineHeight', lineHeight);
  const div = document.getElementById('text');
  div.style.lineHeight = lineHeight;
}

function inputFont() {
  document.getElementById('size').addEventListener('change', changeFontSize);
  document.getElementById('spacing').addEventListener('change', changeLineHeight);
}

inputFont();
