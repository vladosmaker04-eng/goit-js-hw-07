function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const markup = Array.from({ length: amount }, (_, i) => {
    const size = 30 + i * 10;
    return `<div style="width:${size}px;height:${size}px;background-color:${getRandomHexColor()};"></div>`;
  }).join('');
  boxes.innerHTML = markup;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const value = parseInt(input.value);
  if (value < 1 || value > 100 || isNaN(value)) return;
  createBoxes(value);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);