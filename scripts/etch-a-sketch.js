/*  TO DO / HELPFUL PROPERTIES
    -- need to create a div for each grid block using js.
    -- need to create a grid with js to satisify the project.
    -- set BORDERS and MARGINS to 0?
    -- can target the #container div inside index.html to append all the child nodes.
    -- need to create variable grid setup so that a user can enter any number between x and y to create a grid with those square dimensions, but using the same pixel area (960x960 say).
    -- the new grid should generate in the same total space as before (e.g. 960px wide) to create a new sketch pad
    -- need to set a div:hover action to change the content/background-color.
    -- need to use event listeners to look for the hover action start point in order to trigger the change.
    -- change the color of the divs by changing the css class.
    -- need to add a button that resets the grid.
    -- push to github

    ELEMENTS:
    <div>
    <button>

    PROPERTIES:
    grid-template-columns
    grid-template-rows
    grid-auto-columns
    grid-auto-rows
    grid-auto-flow
    grid-row
    grid-column
    grid-row-gap
    grid-column-gap
    x:hover
    background-color

    FUNCTIONS:
    repeat()

    DATA TYPES:
    <flex> -- 1fr, 2fr, etc.
*/

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
  setGrid(10, 10);
}

// need to create a div for each grid block using js
function setGrid(width, height) {
  clearGrid();

  for (i = 0; i < (width * height); i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.addEventListener('mouseover', (e) => {
      block.classList.add('block-filled');
    });
    container.appendChild(block);
    // let divList = container.childNodes;
  }


/*
  for (i = 0; i < divList.length; i++) {
    // need to change the size of the blocks
  }
}
*/

/*.block {
  width: 5px;
  height: 5px;
  float: left;
  background-color: white;
}*/

// need to add a hover listener to change the class of my block divs from clear to filled
