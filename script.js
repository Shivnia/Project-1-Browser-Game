const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
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
}

submitButton.addEventListener('click', loadQuestion);
loadQuestion();
