
const questions = [
    {
        question: "Who verified the level Sakupen Circles?",
        choices: ["Cursed", "Doggie", "Diamond", "Denni"],
        answer: "Diamond"
    },
    {
        question: "Who verified the level Slaughterhouse?",
        choices: ["Doggie", "SpaceUK", "Zoink", "RaeveZ"],
        answer: "Doggie"
    },
    {
        question: "Who verified the level Silent Clubstep?",
        choices: ["Vision", "Paqoe", "Hyperbola", "Septagon"],
        answer: "Paqoe"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    choicesElement.innerHTML = '';
    q.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    const q = questions[currentQuestion];
    if (choice === q.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    submitButton.style.display = 'none';

    // Create and append the retry button
    const retryButton = document.createElement('button');
    retryButton.textContent = 'Retry Quiz';
    retryButton.onclick = () => {
        // Reset score and current question
        score = 0;
        currentQuestion = 0;
        // Reload the first question
        loadQuestion();
        // Clear the result message
        resultElement.textContent = '';
        // Display the submit button again
        submitButton.style.display = 'block';
    };
    resultElement.appendChild(retryButton);
}


submitButton.addEventListener('click', loadQuestion);
loadQuestion();
