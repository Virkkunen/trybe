// Storage
window.addEventListener('load', function() {
  if (localStorage.length < 1) return;
  console.log('getting data from localStorage');
  console.log(localStorage)

  if (localStorage.font) {
    changeFont(localStorage.font);
  }
  if (localStorage.fontSize) {
    changeFontSize(localStorage.fontSize);
  }
});


const header = document.getElementById('header');
const main = document.getElementById('main');
const config = document.getElementById('config');
const headerTitle = document.getElementById('header-title');

// Colors
function changeGruvDark() {
  document.body.classList.add('gruvboxBgDark0');
  document.body.classList.remove('gruvboxBgLight0', 'nordBgDark0', 'nordBgLight0');
  header.className = 'gruvboxBgDark1 gruvboxFgDark';
  main.className = 'gruvboxFgDark';
  config.className = 'configs gruvboxBgDark2';
}

function changeGruvLight() {
  document.body.classList.add('gruvboxBgLight0');
  document.body.classList.remove('gruvboxBgDark0', 'nordBgDark0', 
  'nordBgLight0');
  header.className = 'gruvboxBgLight1 gruvboxFgLight';
  main.className = 'gruvboxFgLight';
  config.className = 'configs gruvboxBgLight2';
}

function changeNordDark() {
  document.body.classList.add('nordBgDark0');
  document.body.classList.remove('gruvboxBgDark0', 'gruvboxBgLight0', 'nordBgLight0');
  header.className = 'nordBgDark1 nordFgDark';
  main.className = 'nordFgDark';
  config.className = 'configs nordBgDark2';
}

function changeNordLight() {
  document.body.classList.add('nordBgLight0');
  document.body.classList.remove('gruvboxBgDark0', 'gruvboxBgLight0', 'nordBgDark0');
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
  document.body.classList.remove('serif', 'monospace');
  document.body.classList.add('sans');
}

function changeFontSerif() {
  document.body.classList.remove('sans', 'monospace');
  document.body.classList.add('serif');
}

function changeFontMono() {
  document.body.classList.remove('serif', 'sans');
  document.body.classList.add('monospace');
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
  let fontSize;
  if (typeof(evt) == 'string') {
    fontSize = evt;
  } else {
    fontSize = `${evt.target.value}px`;
  }
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
