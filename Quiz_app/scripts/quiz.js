const quizData = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Cascading Style Scripts",
      "Cascading Style Syntax",
      "Cascading Style System",
    ],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<css>", "<style>", "<link>", "<script>"],
    correct: 2,
  },
  {
    question: "What does the 'flex' property in CSS do?",
    options: [
      "Defines an element's position",
      "Creates a flexible container for layout",
      "Adds animation effects",
      "Increases font size",
    ],
    correct: 1,
  },
  {
    question: "Which of these is NOT a valid JavaScript data type?",
    options: ["Number", "Boolean", "Float", "Object"],
    correct: 2,
  },
  {
    question: "What is the default display property of a `<div>` element?",
    options: ["inline", "block", "flex", "grid"],
    correct: 1,
  },
  {
    question: "Which JavaScript function is used to add an element to the DOM?",
    options: [
      "document.createElement()",
      "document.appendChild()",
      "document.addElement()",
      "document.newElement()",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is NOT a CSS pseudo-class?",
    options: [":hover", ":first-child", "::before", ":text-color"],
    correct: 3,
  },
  {
    question: "What is the correct way to define a function in JavaScript?",
    options: [
      "def myFunction() {}",
      "function myFunction() {}",
      "fn myFunction() {}",
      "define myFunction() {}",
    ],
    correct: 1,
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-style", "font-weight", "text-decoration", "text-transform"],
    correct: 1,
  },
  {
    question: "Which JavaScript keyword is used to declare a constant?",
    options: ["var", "let", "const", "define"],
    correct: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedOptions = {}; // Store selected answers

const questionText = document.getElementById("question-text");
const questionId = document.getElementById("question-id");
const options = document.querySelectorAll(".option label");
const inputs = document.querySelectorAll(".option input");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const timerDisplay = document.getElementById("timer");
const day = document.getElementById("day");

day.textContent = new Date().toLocaleDateString("en-US", { weekday: "long" });

// Function to load a question
function loadQuestion() {
  const q = quizData[currentQuestion];
  questionText.textContent = q.question;
  questionId.textContent = currentQuestion + 1;

  q.options.forEach((option, index) => {
    options[index].textContent = option;
    inputs[index].checked = selectedOptions[currentQuestion] === index;
  });

  if (currentQuestion === quizData.length - 1) {
    nextBtn.textContent = "Submit";
  }
}

// Function to save selected answer
function saveAnswer() {
  const selectedInput = document.querySelector(
    'input[name="quiz-option"]:checked'
  );
  if (selectedInput) {
    const selectedIndex = Array.from(inputs).indexOf(selectedInput);
    selectedOptions[currentQuestion] = selectedIndex;
  }
}

// Function to calculate score
function calculateScore() {
  score = 0;
  Object.entries(selectedOptions).forEach(([questionIndex, selectedIndex]) => {
    if (quizData[questionIndex].correct === selectedIndex) {
      score++;
    }
  });
}

// Function to handle next question
nextBtn.addEventListener("click", () => {
  saveAnswer();
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    endQuiz();
  }
});

// Function to end the quiz
function endQuiz() {
  clearInterval(updateTimer);
  calculateScore();
  localStorage.setItem("quizScore", score);
  window.location.href = "result.html";
}

// Function to handle previous question
prevBtn.addEventListener("click", () => {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

// Function for countdown timer (10 minutes)
let timeLeft = 10 * 60; // 10 minutes in seconds
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  } else {
    calculateScore();
    alert(`Time's up! Your score: ${score}/10`);
  }
}

// Start the quiz
loadQuestion();
updateTimer();
