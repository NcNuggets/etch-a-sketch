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
let gridWidth = 80;
let gridHeight = 80;

// need to create a div for each grid block using js
for (i = 0; i < (gridWidth * gridHeight); i++) {
  let div = document.createElement('div');
  div.classList.add('block-clear');
  div.addEventListener('mouseover', (e) => {
    div.classList.remove('block-clear');
    div.classList.add('block-filled');
  });
  container.appendChild(div);
}

// need to add a hover listener to change the class of my block divs from clear to filled
