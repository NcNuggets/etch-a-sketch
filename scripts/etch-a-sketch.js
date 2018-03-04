// just a quick title
const title = document.querySelector('.title');
let header = document.createElement('h1');
header.textContent = 'Etch-a-Sketch';
title.appendChild(header);

// can target the #container div inside index.html to append all the child nodes
const container = document.querySelector('.container');

// create 3 buttons to set grid size
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('container-buttons');

let gridButton10 = document.createElement('button');
gridButton10.classList.add('buttons');
gridButton10.textContent = '10 x 10';
gridButton10.addEventListener('click', () => {
  setGrid(10, 10);
});

let gridButton25 = document.createElement('button');
gridButton25.classList.add('buttons');
gridButton25.textContent = '25 x 25';
gridButton25.addEventListener('click', () => {
  setGrid(25, 25);
});

let gridButton50 = document.createElement('button');
gridButton50.classList.add('buttons');
gridButton50.textContent = '50 x 50';
gridButton50.addEventListener('click', () => {
  setGrid(50, 50);
});

buttonContainer.appendChild(gridButton10);
buttonContainer.appendChild(gridButton25);
buttonContainer.appendChild(gridButton50);

const body = document.querySelector('body');
body.appendChild(buttonContainer);

// make a reset button
let resetButton = document.createElement('button');
resetButton.classList.add('buttons');
resetButton.classList.add('button-reset');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', resetGrid);

buttonContainer.appendChild(resetButton);

// clear the grid
function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function resetGrid() {
  clearGrid();
  setGrid(25, 25);
}

resetGrid();

// need to create a div for each grid block using js
function setGrid(width, height) {
  clearGrid();

  let blockWidth = 500 / width;
  let blockHeight = 500 / height;

  for (i = 0; i < (width * height); i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.style.width = blockWidth + 'px';
    block.style.height = blockHeight + 'px';

    // need to add a hover listener to change the class of my block divs from clear to filled
    block.addEventListener('mouseover', (e) => {
      block.classList.add('block-filled');
    });

    container.appendChild(block);
  }
}
