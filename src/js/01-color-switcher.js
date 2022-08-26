import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.setAttribute('disabled', '');
  timerId = setInterval(() => {
    changeColorBody();
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.removeAttribute('disabled', '');
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColorBody() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}
