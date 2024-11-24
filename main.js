// identifying the button

const button = document.getElementById('colorBlue');

button.addEventListener('click', () => {
  const colors = ['blue', 'red', 'purple', 'green', 'pink'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});