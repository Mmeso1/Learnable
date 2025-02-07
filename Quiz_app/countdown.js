let countDownScreen = document.getElementById("countdown-screen");
let countDownElement = document.getElementById("countdown");
let quizPage = document.getElementById("quiz-page");

let count = 5;
countDownElement.innerHTML = count;

let countDownInterval = setInterval(() => {
  count--;
  countDownElement.innerHTML = count;

  if (count === 0) {
    clearInterval(countDownInterval);

    countDownScreen.style.display = "none";
    quizPage.classList.remove("hidden");
  }
}, 1000);
