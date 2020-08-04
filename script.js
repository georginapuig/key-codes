const code = document.querySelector('.code');
const key = document.querySelector('.key');
const pressKey = document.querySelector('.press-key');
const input = document.getElementById('input');

if (window.screen.width >= 1024 && window.screen.height >= 768) {
  pressKey.style.display = 'block';
  pressKey.innerHTML = 'Press a key';
} else {
  input.style.display = 'block';
}

document.addEventListener('textInput', (e) => {
  console.log(e.data.charCodeAt(0));
  input.value = '';
  pressKey.style.display = 'none';
  code.innerHTML = e.data.charCodeAt(0);
});

document.addEventListener('keypress', (e) => {
  console.log(e.key);
  input.value = '';
  pressKey.style.display = 'none';
  code.innerHTML = e.keyCode;

  // letter
  if (e.key) {
    key.style.display = 'block';
    key.innerHTML = e.key;
  }
});

