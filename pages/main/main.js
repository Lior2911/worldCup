const countDownDate = new Date("November 18, 2022 15:00:00").getTime();
const myTimer = document.getElementById("myTimer");

const timer = setInterval(function () {
  let nowDate = new Date().getTime();
  let timeRemeins = countDownDate - nowDate;
  let days = Math.floor(timeRemeins / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemeins % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
  let minutes = Math.floor((timeRemeins % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemeins % (1000 * 60)) / 1000);

  myTimer.innerHTML = `
  <div class=' display-4 p-2 bg-info bg-opacity-25 fst-italic justify-content-center '>
  <h3 class='fst-italic justify-content-center'>tournument start in :</h3>
  days: ${days} | hrs: ${hours} | min: ${minutes} | sec:${seconds}
  </div>`;

  if (timeRemeins < 0) {
    clearInterval(timer);
    document.getElementById("myTimer").innerHTML = "EXPIRED";
  }
}, 1000);



