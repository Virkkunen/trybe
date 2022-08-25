const p = document.getElementsByTagName('p');
p[1].innerText = 'lorem ipsum pri dolor sit amet'; 

const content = document.getElementsByClassName('main-content');
content[0].style.backgroundColor = "rgb(76,164,109)";

const centerContent = document.getElementsByClassName('center-content');
centerContent[0].style.backgroundColor = "white";

const header = document.getElementsByTagName('h1');
header[0].innerText = 'Exercício 5.1 - JavaScript';

for (let i in p) {
  p[i].innerText = p[i].innerText.toUpperCase();
  console.log(p[i]);
}