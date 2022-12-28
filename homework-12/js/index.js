let inputSeconds = document.querySelector("#inputSeconds");
let inputMinutes = document.querySelector("#inputMinutes");
let inputHours = document.querySelector("#inputHours");
let btnStart = document.querySelector("#btnStart");
let secondsSpan = document.querySelector("#secondsSpan");
let minutesSpan = document.querySelector("#minutesSpan");
let hoursSpan = document.querySelector("#hoursSpan");
let watch = document.querySelector(".clock");

btnStart.addEventListener("click", () => {
  let clock = {
    seconds: +inputSeconds.value,
    minutes: +inputMinutes.value,
    hours: +inputHours.value,
  };
  let { seconds, minutes, hours } = clock;
  function backTime() {
    setInterval(() => {
      if (seconds >= 1) {
        seconds--;
        secondsSpan.innerText = seconds + "s";
      }
    }, 1000);
    setInterval(() => {
      if (seconds === 0 && minutes >= 1) {
        seconds = 60;
        seconds--;
        minutes--;
        minutesSpan.innerText = minutes + "min" + ":";
        secondsSpan.innerText = seconds + "s";
      }
    }, seconds * 1000);
  }
  setInterval(() => {
    if (minutes === 0 && hours >= 1) {
      minutes = 60;
      seconds = 60;
      seconds--;
      minutes--;
      hours--;
      minutesSpan.innerText = minutes + "min" + ":";
      hoursSpan.innerText = hours + "h" + ":";
    }
  }, minutes * 60000);

  backTime();
});

inputSeconds.addEventListener("keypress", (e) => {
  var name = e.key;
  if (name === "Enter") {
    secondsSpan.innerText = inputSeconds.value + "s";
  }
});

inputMinutes.addEventListener("keypress", (e) => {
  var name = e.key;
  if (name === "Enter") {
    minutesSpan.innerText = `${inputMinutes.value}min :`;
  }
});
inputHours.addEventListener("keypress", (e) => {
  var name = e.key;
  if (name === "Enter") {
    hoursSpan.innerText = `${inputHours.value}h :`;
  }
});

// -------------clock
let clock = document.querySelector("#watch");
let secondsClock = document.querySelector("#seconds");
let minutesClock = document.querySelector("#minutes");
let hoursClock = document.querySelector("#hours");

function clockRunner() {
  let d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  clock.innerHTML = `
  <h3>Clock</h3>
  <span id="seconds">${hour}h</span>
  <span id="minutes">${minute}min</span>
  <span id="hours">${second}s</span>
  `;
  setTimeout(clockRunner, 1000);
}
clockRunner();