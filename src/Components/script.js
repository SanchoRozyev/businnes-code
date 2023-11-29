// Countdown timer

const cntdwn = () => {
  const cntDate = new Date('Jan 1, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const remainTime = cntDate - now;

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainTime / day);
  const textHour = Math.floor((remainTime % day) / hour);
  const textMin = Math.floor((remainTime % hour) / min);
  const textSec = Math.floor((remainTime % min) / sec);

  document.querySelector('.day').innerText = textDay
  document.querySelector('.hour').innerText = textHour
  document.querySelector('.min').innerText = textMin
  document.querySelector('.sec').innerText = textSec
}

setInterval(cntdwn, 500);