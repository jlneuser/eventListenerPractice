// identifying the button

const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
  // creating my color palette to choose from
  const colors = ['blue', 'red', 'purple', 'green', 'pink'];
  // using colors[] to choose from the color palette 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // finally, painting onto the background the color chosen
  document.body.style.backgroundColor = randomColor;
});

// **!I DID THIS ONE BY MYSELF!**
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
  const backToWhite = document.body.style.backgroundColor = 'white';
})

