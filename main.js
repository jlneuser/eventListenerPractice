const button = document.getElementById('colorButton');
const resetButton = document.getElementById('reset');
const headingFont = document.getElementById('fontColorButton');
const heading = document.querySelector('h1');
const displayColor = document.getElementById('displayColor');
const toggleButton = document.getElementById('toggle');
let isWhite = true;
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
let countDisplay = document.getElementById('counter');
let count = 0;

button.addEventListener('click', () => {
    const colors = ['blue', 'red', 'purple', 'green', 'pink'];
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  displayColor.textContent = `Current Color: ${randomColor}`;
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
  displayColor.textContent = 'Current Color = White';
})

headingFont.addEventListener('click', () => {
  const colors = ['yellow', 'red', 'purple', 'green'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heading.style.color = randomColor;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const colors = ['blue', 'red', 'purple', 'green', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    displayColor.textContent = `Current Color: ${randomColor}`;
  }
});

toggleButton.addEventListener('click', () => {
  document.body.style.backgroundColor = isWhite ? 'black' : 'white'; 
  isWhite = !isWhite;
});

const displayCount = () => {
  countDisplay.textContent = count;
}

increase.addEventListener('click', () => {
  count++;
  displayCount();
});

decrease.addEventListener('click', () => {
  count--;
  displayCount();
});
