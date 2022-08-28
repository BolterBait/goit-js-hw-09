import flatpickr from 'flatpickr';
import '/node_modules/flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import '../css/common.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.setAttribute('disabled', '');
let timerId = null;
const date = new Date();
let userChoosenTime = 0;
refs.startBtn.addEventListener('click', runTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  allowInput: true,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < date) {
      alert('Dbllflfasdf');
      // Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      refs.startBtn.removeAttribute('disabled', '');
      userChoosenTime = +selectedDates[0].getTime();
      console.log(userChoosenTime);
    }
  },
};

flatpickr(refs.input, options);
require('flatpickr/dist/themes/confetti.css');

function runTimer() {
  refs.startBtn.setAttribute('disabled', '');
  setInterval(() => {
    const targetDate = Date.now();
    const delta = userChoosenTime - targetDate;
    timerId = convertMs(delta);
    if (delta > 0) {
      refs.days.textContent = timerId.days;
      refs.hours.textContent = timerId.hours;
      refs.minutes.textContent = timerId.minutes;
      refs.seconds.textContent = timerId.seconds;
      console.log(timerId);
    }
  }, 1000);
}
function pad(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
