var seconds = parseInt(localStorage.getItem("seconds")) || 0;
var minutes = parseInt(localStorage.getItem("minutes")) || 0;
var timerField = document.querySelector(".timer");

function showTime() {
  timerField.innerHTML =
    "Wow! You've been looking at it for so long. So you like it?: " +
    minutes +
    " min " +
    seconds +
    " sec";
}

showTime(); 

setInterval(function () {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  localStorage.setItem("seconds", seconds);
  localStorage.setItem("minutes", minutes);

  showTime(); 
}, 1000);