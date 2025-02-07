let countDownScreen = document.getElementById("countdown-screen");
let countDownElement = document.getElementById("countdown");

let count = 5;
countDownElement.innerHTML = count;

let countDownInterval = setInterval(() => {
  count--;
  countDownElement.innerHTML = count;

  if (count === 0) {
    clearInterval(countDownInterval);

    countDownScreen.style.display = "none";
    window.location.href = "./quiz.html";
  }
}, 1000);
