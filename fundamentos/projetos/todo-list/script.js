const ol = document.getElementById('lista-tarefas');

function createListItem(value) {
  const li = document.createElement('li');
  li.innerText = value;
  ol.appendChild(li);
}

function createTask() {
  const input = document.getElementById('texto-tarefa');
  if (!input.value) return alert('Input inválido!');
  createListItem(input.value);
  input.value = '';
}

function selectTask(e) {
  const tasks = document.getElementsByTagName('li');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove('selected');
  }
  e.classList.add('selected');
}

function completeTask(e) {
  e.classList.toggle('completed');
}

function deleteAll() {
  ol.innerHTML = '';
}

function deleteDone() {
  const done = document.querySelectorAll('.completed');
  for (let i = 0; i < done.length; i += 1) {
    ol.removeChild(done[i]);
  }
}

function saveTasks() {
  localStorage.setItem('tasks', ol.innerHTML);
}

function restoreTasks() {
  if (!localStorage.getItem('tasks')) return;
  ol.innerHTML = localStorage.getItem('tasks');
}

// obrigado carlos pela ajuda
function moveTaskUp() {
  const selTask = document.querySelector('.selected');
  if (selTask && selTask.previousElementSibling) {
    selTask.parentNode.insertBefore(selTask, selTask.previousElementSibling);
  }
}

function moveTaskDown() {
  const selTask = document.querySelector('.selected');
  if (selTask && selTask.nextElementSibling) {
    selTask.parentNode.insertBefore(selTask.nextElementSibling, selTask);
  }
}

function deleteSelected() {
  const selected = document.querySelector('.selected');
  ol.removeChild(selected);
}

function bubble012(e) {
  if (e.target.id === 'salvar-tarefas') saveTasks();
  if (e.target.id === 'mover-cima') moveTaskUp();
  if (e.target.id === 'mover-baixo') moveTaskDown();
  if (e.target.id === 'remover-selecionado') deleteSelected();
}

function bubble01(e) {
  if (e.target.id === 'criar-tarefa') createTask();
  if (e.target.matches('li')) selectTask(e.target);
  if (e.target.id === 'apaga-tudo') deleteAll();
  if (e.target.id === 'remover-finalizados') deleteDone();
  bubble012(e);
}

function bubble02(e) {
  if (e.target.matches('li')) completeTask(e.target);
}

// event bubbling
document.addEventListener('click', bubble01);
document.addEventListener('dblclick', bubble02);

window.addEventListener('load', restoreTasks);
