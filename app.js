const timer = document.querySelector("#timer");
const startTimer = document.querySelector("#start");

// function Timer() {
//   let countDown = 15;

//   const interval = setInterval(() => {
//     countDown--;
//     timer.innerHTML = countDown;

//     if (countDown === 0) {
//       clearInterval(interval);
//       alert("Time Elapsed");
//     }
//   }, 1000);
// }

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  
  {
    question: "Which programming language is this quiz built with?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  },
  // Add more questions here
];