// hora de enorme quantidade de varivaveis
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const textArea = document.getElementById('textarea');
const btnSubmit = document.getElementById('submit-btn');
const form = document.getElementById('evaluation-form');

// functions
function inputAlert() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function inputCount() {
  const count = 500 - textArea.value.length;
  const counter = document.getElementById('counter');
  counter.innerText = count;
}

function enableSubmitBtn() {
  const check = document.getElementById('agreement');
  if (check.checked) btnSubmit.disabled = false;
  if (!check.checked) btnSubmit.disabled = true;
}

function hideForm() {
  const formData = document.getElementById('form-data');
  form.style.display = 'none';
  formData.style.display = 'flex';
}

function getFamily() {
  const families = document.getElementsByName('family');
  let family;
  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked) family = families[i].value;
  }
  return family;
}

function getSubjects() {
  const subjects = document.getElementsByClassName('subject');
  const setSubjects = [];
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) setSubjects.push(subjects[i].value);
  }
  return setSubjects.join(', ');
}

function getRating() {
  const ratings = document.getElementsByName('rate');
  let rating;
  for (let i = 0; i < ratings.length; i += 1) {
    if (ratings[i].checked) rating = ratings[i].value;
  }
  return rating;
}

const formName = document.getElementById('input-name');
const formLastName = document.getElementById('input-lastname');
const formEmail = document.getElementById('input-email');
const formHouse = document.getElementById('house');
const formObs = document.getElementById('textarea');

function getFormData() {
  const formFamily = getFamily();
  const formSubjects = getSubjects();
  const formRating = getRating();
  const formValues = {
    name: `${formName.value} ${formLastName.value}`,
    email: formEmail.value,
    house: formHouse.value,
    family: formFamily,
    subjects: formSubjects,
    rating: formRating,
    obs: formObs.value,
  };
  console.table(formValues);
  return formValues;
}

function setFormData(data) {
  const spans = document.getElementsByClassName('form-span');
  spans[0].innerText = `Nome: ${data.name}`;
  spans[1].innerText = `Email: ${data.email}`;
  spans[2].innerText = `Casa: ${data.house}`;
  spans[3].innerText = `Família: ${data.family}`;
  spans[4].innerText = `Matérias: ${data.subjects}`;
  spans[5].innerText = `Avaliação: ${data.rating}`;
  spans[6].innerText = `Observações: ${data.obs}`;
}

function submitBtn() {
  const data = getFormData();
  setFormData(data);
  hideForm();
}

// Eventos
function bubble01(e) {
  // console.log(e.target);
  if (e.target.id === 'login') inputAlert();
  if (e.target.id === 'agreement') enableSubmitBtn();
  if (e.target.id === 'submit-btn') submitBtn();
}

document.addEventListener('click', bubble01);
textArea.addEventListener('input', inputCount);
form.addEventListener('submit', (e) => e.preventDefault());
window.addEventListener('load', () => form.reset());
