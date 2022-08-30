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