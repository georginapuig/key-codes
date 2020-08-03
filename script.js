const code = document.querySelector('.code');
const key = document.querySelector('.key');

key.innerHTML = 'Press a key';

document.addEventListener('keyup', (e) => {
  console.log(e.key);
  key.innerHTML = e.key;
  code.innerHTML = e.keyCode;
});
