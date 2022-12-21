function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const text = document.querySelector('.color');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  text.textContent = color;
  body.style.backgroundColor = color;
})