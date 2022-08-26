// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// const refs = {
//   input: document.querySelector('#datetime-picker'),
//   btnStart: document.querySelector('[data-start]'),
//   spanDays: document.querySelector('[data-days]'),
//   spanHours: document.querySelector('[data-hours]'),
//   spanMinutes: document.querySelector('[data-minutes]'),
//   spanSeconds: document.querySelector('[data-seconds]'),
// };

// refs.btnStart.disabled = true;

// const CURRENT_DAY = new Date();
// let SELECTED_DAY = new Date();

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     // console.log(selectedDates[0].getTime());
//     // console.log(selectedDates[0].getTime() - CURRENT_DAY.getTime());
//     if (selectedDates[0] < CURRENT_DAY) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       // window.alert('Please choose a date in the future');
//       refs.btnStart.disabled = true;
//     } else {
//       refs.btnStart.disabled = false;
//       // selectedDates[0] = CURRENT_DAY;
//       Notiflix.Notify.success('This time is right');
//     }

//     // let msSum = selectedDates[0].getTime() - CURRENT_DAY.getTime();
//     // console.log(msSum);
//     // convertMs(msSum);
//     // console.log(convertMs(msSum));
//   },
// };

// options.onClose();

// // let aaac = selectedDates;
// // console.log(aaac);

// flatpickr(refs.input, options);
// require('flatpickr/dist/themes/confetti.css');

// // refs.btnStart.addEventListener('click', onStartBtnClick);

// function onStartBtnClick() {
//   convertMs();
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   // padStart()
// }
