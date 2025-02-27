//Metodos Clasicos
const title = document.getElementById('main-title');
console.log(title.textContent);
title.textContent = "Este es un titulo diferente";

const boxes = document.getElementsByClassName('box');
console.log(boxes);
const boxesArray = Array.from(boxes);

console.log(boxesArray);

//Metodos Modernos
const sameTitle = document.querySelector('.titles-container h1');
console.log(sameTitle);

const allTitles = document.querySelectorAll('.titles-container h1');
console.log(allTitles);
const allTitlesArray = Array.from(allTitles);
console.log(allTitlesArray);

const querySelectorBoxes = document.querySelectorAll('.container .box');
const querySelectorBoxesArray = Array.from(querySelectorBoxes);
console.log(querySelectorBoxesArray);

//Creando nodos con JS
const myNewTitle = document.createElement('h1');
const textTitle = document.createTextNode('Soy un nuevo titulo');
myNewTitle.appendChild(textTitle);
const titlesContainer = document.querySelector('.titles-container');
titlesContainer.appendChild(myNewTitle);

//Creando un div con un parrafo dentro
const myNewBox = document.createElement('div');
const pBox = document.createElement('p');
const textBox = document.createTextNode('Div creado con JS');
pBox.appendChild(textBox);
myNewBox.appendChild(pBox);
myNewBox.classList.add('box');
const container = document.querySelector('.container');
container.appendChild(myNewBox);

//Removiendo nodos
const boxToBeRemoved = document.querySelector('.box');
console.log(boxToBeRemoved);
container.removeChild(boxToBeRemoved);

/* while(container.firstChild){
    container.removeChild(container.firstChild);
} */

const myNewTitle2 = document.createElement('h1');
myNewTitle2.textContent = 'Soy un nuevo titulo 2';
titlesContainer.appendChild(myNewTitle2);

const newImage = document.createElement('img');
newImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg';
newImage.alt = 'Gato';
newImage.style.width = '15rem';
titlesContainer.appendChild(newImage);