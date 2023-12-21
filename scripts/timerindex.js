const timer = document.getElementById('indexTimer');
const years = document.getElementById("years");
let yearText = document.getElementsByClassName("2023");
const directJump = document.getElementsByTagName('direktjump')[0]

if (month == 12) {
  timer.style.display = "none";
  years.style.display = "none";
  directJump.style.display = "block";
  for(let i = 0; i < yearText.length; i++) {
    yearText[i].style.display = "block";
  }
} else {
  for(let i = 0; i < yearText.length; i++) {
    yearText[i].style.display = "none";
  }
  timer.style.display = "block";
  years.style.display = "block";
  directJump.style.display = "none";
}

let enddate = '2023/12/01 00:00';

if (month !== 12) {
  enddate = '2024/12/01 00:00'
}

function _CreatePrintibleNumber(numb, size) {
  var s = "0" + numb;
  return s.substr(s.length - size);
}

function _ParseDate(date) {
  const parsed = Date.parse(date);
  if (!isNaN(parsed)){
    return parsed;
  } 
  return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
}

function _GetRemainingTime(endtime) {
  let total = _ParseDate(endtime) - Date.parse(new Date())
  let seconds = Math.floor((total / 1000) % 60)
  let minutes = Math.floor((total / 1000 / 60) % 60)
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  let days = Math.floor(total / (1000 * 60 * 60 * 24))
  console.log(total)

  return { total, days, hours, minutes, seconds };
}

function _Clock(id, endtime) {
  let days = document.getElementById(id + '-days')
  let hours = document.getElementById(id + '-hours')
  let minutes = document.getElementById(id + '-minutes')
  let seconds = document.getElementById(id + '-seconds')

  var timeinterval = setInterval(function () {
  var time = _GetRemainingTime(endtime);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    } else {
      days.innerHTML = _CreatePrintibleNumber(time.days, 3);
      hours.innerHTML = _CreatePrintibleNumber(time.hours, 2);
      minutes.innerHTML = _CreatePrintibleNumber(time.minutes, 2);
      seconds.innerHTML = _CreatePrintibleNumber(time.seconds, 2);
      if (time.total <= 1000) {
        timer.style.display = "none";
      }
    }
  });
}
_Clock('clock', enddate);