function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// 1
function createDays(arrDays) {
  const ulDays = document.getElementById('days');
  arrDays.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    li.className = 'day';
    if (item === 24 || item === 25 || item === 31) li.classList.add('holiday');
    if (item === 4 || item === 11 || item === 18 || item === 25) li.classList.add('friday');
    ulDays.appendChild(li);
  })
}

createDays(decemberDaysList);

// 2
function positionHolidayBtn(btn) {
  const div = document.getElementsByClassName('buttons-container')[0];
  div.appendChild(btn);
}

function createHolidayBtn(str) {
  const newBtn = document.createElement('button');
  newBtn.setAttribute('id', 'btn-holiday');
  newBtn.innerText = str;
  positionHolidayBtn(newBtn);
}

createHolidayBtn('Feriados');

// 3
function addHolidayBtnEvent() {
  return document.getElementById('btn-holiday').addEventListener('click', changeHolidayBg);
}

function changeHolidayBg() {
  console.log('holiday click');
  const holidays = document.getElementsByClassName('holiday');
  for (let i of holidays) {
    if (i.style.backgroundColor) {
      i.removeAttribute('style');
    } else {
      i.style.backgroundColor = '#83a598';
    }
  }
  return holidays;
}

addHolidayBtnEvent();

// 4
function positionFridayBtn(btn) {
  const div = document.getElementsByClassName('buttons-container')[0];
  div.appendChild(btn);
}

function createFridayBtn(str) {
  const newBtn = document.createElement('button');
  newBtn.setAttribute('id', 'btn-friday');
  newBtn.innerText = str;
  positionHolidayBtn(newBtn);
}

createFridayBtn('Sexta-feira');

// 5
function addFridayBtnEvent() {
  return document.getElementById('btn-friday').addEventListener('click', changeFridayText);
}

function saveFridays() {
  const fridays = document.getElementsByClassName('friday');
  let arrayFridays = [];
  for (let i of fridays) {
    arrayFridays.push(i.innerText);
  }
  return arrayFridays;
}

const savedFridays = saveFridays();

function changeFridayText() {
  const fridays = document.getElementsByClassName('friday');
  
  for (let i in fridays) {
    if (fridays[i].innerText !== '🎉🍻') {
      fridays[i].innerText = '🎉🍻';
    } else {
      fridays[i].innerText = savedFridays[i];
    }
  }
}

addFridayBtnEvent();

// 6 
function addDayHoverEvent() {
  document.getElementById('days').addEventListener('mouseover', zoomIn);
  document.getElementById('days').addEventListener('mouseout', zoomOut);
}

function zoomIn(evt) {
  if (evt.target.matches('li')) evt.target.style.fontSize = '32px'
}
function zoomOut(evt) {
  if (evt.target.matches('li')) evt.target.style.fontSize = '20px'
}

addDayHoverEvent();

// 7
function positionEvent(el) {
  const taskList = document.getElementsByClassName('my-tasks')[0];
  taskList.appendChild(el);
  return taskList;
}

function createEvent(str) {
  const newEvent = document.createElement('span');
  newEvent.innerText = str;
  positionEvent(newEvent);
}

createEvent('lorem ipsum');