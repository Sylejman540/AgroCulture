const questions  = [
  {
    question: "What is a primary benefit of crop rotation?",
    answers: [
      { text: "Improves soil fertility", correct: true },
      { text: "Increases pest infestation", correct: false },
      { text: "Reduces plant growth", correct: false },
      { text: "Eliminates the need for fertilizers", correct: false },
    ]
  },
  {
    question: "Which farming practice avoids the use of synthetic chemicals?",
    answers: [
      { text: "Organic farming", correct: true },
      { text: "Conventional farming", correct: false },
      { text: "Monoculture", correct: false },
      { text: "Hydroponic farming", correct: false },
    ]
  },
  {
    question: "Which crop is considered a major cash crop in many tropical countries?",
    answers: [
      { text: "Coffee", correct: true },
      { text: "Wheat", correct: false },
      { text: "Rice", correct: false },
      { text: "Barley", correct: false },
    ]
  },
  {
    question: "Which irrigation method is known for its high water efficiency?",
    answers: [
      { text: "Drip irrigation", correct: true },
      { text: "Flood irrigation", correct: false },
      { text: "Sprinkler irrigation", correct: false },
      { text: "Manual watering", correct: false },
    ]
  },
  {
    question: "What does GMO stand for?",
    answers: [
      { text: "Genetically Modified Organism", correct: true },
      { text: "General Microbial Operation", correct: false },
      { text: "Growth Maximization Objective", correct: false },
      { text: "Global Market Organization", correct: false },
    ]
  }
];


  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        // Store the correct answer as a string "true"
        button.dataset.correct = "true";
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === "Play Again") {
      startQuiz();
    } else {
      handleNextButton();
    }
  });

  startQuiz();



 // Set countdown for 23 hours in milliseconds
 const countdownTime = 23 * 60 * 60 * 1000;
 const endTime = new Date().getTime() + countdownTime;

 const timerElement = document.getElementById('timer');

 function updateTimer() {
   const now = new Date().getTime();
   const distance = endTime - now;

   if (distance < 0) {
     timerElement.innerHTML = "EXPIRED";
     clearInterval(timerInterval);
     return;
   }

   // Calculate hours, minutes, and seconds remaining
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   timerElement.innerHTML = `Time Left: ${hours}h ${minutes}m ${seconds}s`;
 }

 // Update the timer every second
 updateTimer(); // initial call to display immediately
 const timerInterval = setInterval(updateTimer, 1000);


//  MENU

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden')
    }
})

// Dark theme
var icon = document.getElementById("icon");
      
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};