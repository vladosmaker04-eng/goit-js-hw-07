const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', (e) => {
  const value = e.target.value.trim();
  output.textContent = value !== '' ? value : 'Anonymous';
});