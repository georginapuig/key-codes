const code = document.querySelector('.code');
const key = document.querySelector('.key');

document.addEventListener('keyup', (e) => {
  console.log(e);
  code.innerHTML = e.keyCode;
  key.innerHTML = e.key;
});