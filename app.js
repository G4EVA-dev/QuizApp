const timer = document.querySelector("#timer");
const startTime = document.querySelector("#start");

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },

  {
    question: "Which programming language is this quiz built with?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },

  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },

  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },

  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let countDown = 60;

const questionContainer = document.querySelector("#question");
const optionsContainer = document.querySelector(".questionOptions");
const nextButton = document.querySelector("#nextButton");
const scoreContainer = document.getElementById("score");

function startQuiz() {
  showQuestion();
  startTimer();
}

const showQuestion = () => {
  const currentQuiz = quizData[currentQuestion];
  questionContainer.textContent = currentQuiz.question;

  optionsContainer.innerHTML = "";
  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
};
showQuestion();

function checkAnswer(selectedOption) {
  const currentQuiz = quizData[currentQuestion];
  if (selectedOption === currentQuiz.correctAnswer) {
    score++;
    scoreContainer.textContent = score;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// nextButton.addEventListener("click", nextQuestion);

function startTimer() {
  const interval = setInterval(() => {
    countDown--;
    timer.textContent = countDown;

    if (countDown <= 0) {
      clearInterval(interval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  alert("Quiz Finished! Your Score: " + score);
}
