// identifying the button
const button = document.getElementById('colorButton');

// need to identify the "curernt color"
const currentColor = document.getElementById('displayColor');

// changing background color
button.addEventListener('click', () => {
  // creating my color palette to choose from
  const colors = ['blue', 'red', 'purple', 'green', 'pink'];
  // using colors[] to choose from the color palette 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // finally, painting onto the background the color chosen
  document.body.style.backgroundColor = randomColor;
  currentColor.innerHTML = `Display Color: ${randomColor}`;
});

// **!I DID THIS ONE BY MYSELF!**
const resetButton = document.getElementById('reset');
const resetText = document.getElementById('displayColor');

resetButton.addEventListener('click', () => {
  const backToWhite = document.body.style.backgroundColor = 'white';
  resetText.innerHTML ='Current Color: White';

})


// button to randomly change the color of the heading font 

const headingFont = document.getElementById('fontColorButton');
const heading = document.querySelector('h1');

headingFont.addEventListener('click', () => {
  const colors = ['yellow', 'red', 'purple', 'green'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heading.style.color = randomColor;
});

// Identifying buttons and elements
const displayColor = document.getElementById('.displayColor'); // Assuming you're using the class

// Event listener for button click to change the background color
button.addEventListener('click', () => {
  const colors = ['blue', 'red', 'purple', 'green', 'pink'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  displayColor.innerHTML = `Current Color: ${randomColor}`;
});

// Event listener for reset button to reset the background color to white
resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
  displayColor.innerHTML = `Current Color: White`;
});

// Event listener for keydown (Enter key) to change the background color
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const colors = ['blue', 'red', 'purple', 'green', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    displayColor.innerHTML = `Current Color: ${randomColor}`;
  }
});


// toggle between back and white for background color

const toggleButton = document.getElementById('toggle');
let isWhite = true;

toggleButton.addEventListener('click', () => {
    document.body.style.backgroundColor = isWhite ? 'black' : 'white'; 
  isWhite = !isWhite;
});