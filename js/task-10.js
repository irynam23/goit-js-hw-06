function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('.input-number')
const divBoxes = document.querySelector('#boxes')
const buttonCreate = document.querySelector('.create-button');
const buttonDestroy = document.querySelector('.destroy-button');

buttonCreate.addEventListener('click', onCreate)
buttonDestroy.addEventListener('click', destroyBoxes)

function onCreate() {
  const amount = input.value;
  if (!amount) {
    console.log("Please, enter a number")
    return
  }
  createBoxes(amount)
}

function createBoxes(amount) {
  destroyBoxes();
const boxes = [];
const basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const box = document.createElement('div')
  box.style.width = size + 'px'
box.style.height = size + 'px'
    box.style.backgroundColor = getRandomHexColor()
    boxes.push(box);
  }
  divBoxes.append(...boxes);
  input.value = null
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
