// Function to start the quiz (called when clicking "Start Quiz")
function startQuiz() {
  document.getElementById('home').style.display = 'none'; // Hide home section
  document.getElementById('quiz').style.display = 'block'; // Show quiz section
}

// Function to submit the quiz and calculate the score
function submitQuiz() {
  const form = document.getElementById('quizForm');
  let score = 0;
  
  // Correct answers
  const answers = {
    q1: "B", // Albert Einstein
    q2: "A", // H2O
    q3: "B", // Thomas Edison
    q4: "A", // O2
    q5: "B"  // Jonas Salk
  };

  // Check the answers
  for (let question in answers) {
    const selectedAnswer = form.querySelector(`input[name="${question}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === answers[question]) {
      score++;
    }
  }

  // Display score
  const scoreMessage = document.getElementById('scoreMessage');
  const emoji = score >= 4 ? '🎉' : '😕';
  scoreMessage.innerHTML = `You scored ${score}/5 ${emoji}`;

  // Show popup
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
