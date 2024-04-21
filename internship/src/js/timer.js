const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const output = document.querySelector(".output");

const timer = {
  intervalId: null,
  currentTime: 0,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    console.log(startTime);
    this.intervalId = setInterval(() => {
      this.currentTime = Date.now() - startTime;

      const { days, hours, minutes, seconds } = convertMs(timer.currentTime);
      //   console.log(`${days}:${hours}:${minutes}:${seconds}`);
      updateInterface({ days, hours, minutes, seconds });
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};

startBtn.addEventListener("click", () => {
  timer.start();
});

stopBtn.addEventListener("click", () => {
  timer.stop();
});

// const { days, hours, minutes, seconds } = convertMs(timer.currentTime);

function updateInterface({ days, hours, minutes, seconds }) {
  output.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const pop = "0".padStart("0", 2);
console.log(pop);

const isSuccess = true;

console.log("before create promise");

const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  if (isSuccess) {
    resolve("resolve done");
  } else {
    reject("reject. is success false");
  }
  //   }, 2000);
});

console.log("after create promise");

promise.then((value) => console.log(value));

console.log("after then()");

const makeGreeting = (guestName) => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject(error);
  }

  return Promise.resolve(guestName);
};

const result = makeGreeting("")
  .then((e) => console.log(e))
  .catch((e) => console.error(e));
