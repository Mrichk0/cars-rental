// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// const datetimePicker = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('[data-start]');
// const allTimeSections = document.querySelectorAll('.value');

// let selectedTime = null;
// let intervalId = 0;

// startBtn.disabled = true;

// startBtn.addEventListener('click', onStartClick);

// console.log(Date.now());
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0].getTime() < Date.now()) {
//       Notiflix.Notify.warning('Please choose a date in the future');
//       return;
//     }
//     selectedTime = selectedDates[0];
//     startBtn.disabled = false;
//   },
// };

// function addText(all) {
//   const timeForEnd = convertMs(selectedTime - Date.now());
//   const timeValues = Object.values(timeForEnd);

//   all.forEach((item, index) => {
//     item.textContent = addLeadingZero(timeValues[index]);
//   });
//   if (!timeForEnd.seconds) {
//     clearInterval(intervalId);
//   }
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// flatpickr(datetimePicker, options);

// function onStartClick() {
//   intervalId = setInterval(() => addText(allTimeSections), 1000);
//   startBtn.disabled = true;
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

// const makeOrder = dish => {
//   return new Promise((resolve, reject) => {
//     const canFulfil = Math.random() > 0.5;
//     setTimeout(() => {
//       if (canFulfil) {
//         resolve('ok');
//       }
//       reject('ne ook');
//     }, 1000);
//   });
// };

// makeOrder('cake').then(onFullfiled).catch(onReject);

// promise.then(onFullfiled, onReject).then(x => {
//   console.log('x', x);
// });

// function onFullfiled(resolve) {
//   console.log('onFullfiled', resolve);
// }

// function onReject(reject) {
//   console.log('onReject', reject);
// }

// // const makeOrder = dish => {
// //   return Promise.resolve('ok' );
// // };

// const fetchPokemon = id => {
//   return fetch('https://pokeapi.co/api/v2/pokem on/1').then(r => r.json());
// };
// fetchPokemon(1).then(onFullfiled).catch(onReject);

// const makePromise = () => {
//   return new Promise((reslove, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         reslove('ok');
//       }
//       reject('ne ok');
//     }, 1000);
//   });
// };

// makePromise()
//   .then(ok => {
//     console.log(ok);
//   })
//   .catch(error => console.log(error));

const btn = document.querySelector('.js-race-btn');
const winner = document.querySelector('.js-winner');
const porgres = document.querySelector('.js-progress');
const table = document.querySelector('.js-result > tbody');

let counter = 0;

btn.addEventListener('click', () => {
  counter += 1;
  const promises = horses.map(run);

  porgres.textContent = 'start race';
  winner.textContent = '';
  Promise.race(promises).then(({ horse, time }) => {
    winner.textContent = ` champ :${horse}; time: ${time}`;
    updateResalt({ horse, time });
  });

  Promise.all(promises).then(() => {
    porgres.textContent = 'stop race';
  });
});

const horses = ['salat', 'ecllips', 'west', 'fox', 'seab'];
// console.log('%c start raice', 'color: brown; font-size: 14px;');
// console.log(`%c champ${1} time ${1}`, 'color: green; font-size: 14px;');
// console.log('%c finish raice', 'color: blue; font-size: 14px;');

// const promises = horses.map(horse => run(horse));
// те саме що верхній код

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c champ :${horse} time ${time}`,
//     'color: green; font-size: 24px;'
//   );
// });

function updateResalt({ horse, time }) {
  const tr = `<tr>
    <td>${counter} </td>
    <td>${horse}</td>
    <td>${time}</td>
  </tr>`;

  table.insertAdjacentHTML('beforebegin', tr);
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
