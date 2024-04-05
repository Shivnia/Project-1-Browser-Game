const questions = [
    {
        category: "Geography",
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        answer: "Ottawa"
    },
    {
        category: "Geography",
        question: "Which is the longest river in the world?",
        choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        category: "Geography",
        question: "What is the smallest country in the world?",
        choices: ["Monaco", "Vatican City", "Nauru", "San Marino"],
        answer: "Vatican City"
    },
    {
        category: "Geography",
        question: "What is the tallest building in the world?",
        choices: ["Shanghai Tower", "Burj Khalifa", "Abraj Al-Bait Clock Tower", "One World Trade Center"],
        answer: "Burj Khalifa"
    },
    {
        category: "Geography",
        question: "Which continent is the least populated?",
        choices: ["Asia", "Australia", "Antarctica", "Africa"],
        answer: "Antarctica"
    },
    {
        category: "Astronomy",
        question: "What is the closest star to Earth?",
        choices: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Betelgeuse"],
        answer: "Proxima Centauri"
    },
    {
        category: "Astronomy",
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        choices: ["Venus", "Mars", "Mercury", "Jupiter"],
        answer: "Venus"
    },
    {
        category: "Astronomy",
        question: "What is the name of the galaxy that contains the Milky Way?",
        choices: ["Andromeda", "Sombrero", "Whirlpool", "Pinwheel"],
        answer: "Andromeda"
    },
    {
        category: "Astronomy",
        question: "Which planet is known as the 'Blue Planet'?",
        choices: ["Earth", "Neptune", "Uranus", "Saturn"],
        answer: "Earth"
    },
    {
        category: "Astronomy",
        question: "What is the phenomenon where a total solar eclipse occurs and the sun's corona is visible?",
        choices: ["Umbra", "Penumbra", "Corona", "Diamond Ring"],
        answer: "Corona"
    },
    {
        category: "Literature",
        question: "Who wrote the Harry Potter series?",
        choices: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Suzanne Collins"],
        answer: "J.K. Rowling"
    },
    {
        category: "Literature",
        question: "Which Shakespearean play features the character Hamlet?",
        choices: ["Macbeth", "Romeo and Juliet", "Hamlet", "Othello"],
        answer: "Hamlet"
    },
    {
        category: "Literature",
        question: "Who wrote '1984'?",
        choices: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Arthur C. Clarke"],
        answer: "George Orwell"
    },
    {
        category: "Literature",
        question: "Which novel by Jane Austen begins with the line 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife'?",
        choices: ["Emma", "Pride and Prejudice", "Sense and Sensibility", "Mansfield Park"],
        answer: "Pride and Prejudice"
    },
    {
        category: "Literature",
        question: "Who wrote 'The Great Gatsby'?",
        choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        answer: "F. Scott Fitzgerald"
    },
    {
        category: "Science",
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "So", "Sd", "Ni"],
        answer: "Na"
    },
    {
        category: "Science",
        question: "What is the pH value of pure water?",
        choices: ["7", "6", "8", "9"],
        answer: "7"
    },
    {
        category: "Science",
        question: "What is the process by which plants make their own food called?",
        choices: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        answer: "Photosynthesis"
    },
    {
        category: "Science",
        question: "What is the densest element?",
        choices: ["Osmium", "Plutonium", "Gold", "Lead"],
        answer: "Osmium"
    },
    {
        category: "Science",
        question: "What is the unit of electrical resistance?",
        choices: ["Ohm", "Ampere", "Volt", "Watt"],
        answer: "Ohm"
    },
    {
        category: "Technology",
        question: "What does CPU stand for?",
        choices: ["Central Processing Unit", "Computer Processor Unit", "Core Processing Unit", "Central Processor Unit"],
        answer: "Central Processing Unit"
    },
    {
        category: "Technology",
        question: "Who founded Apple Inc.?",
        choices: ["Steve Jobs", "Bill Gates", "Steve Wozniak", "Jeff Bezos"],
        answer: "Steve Jobs"
    },
    {
        category: "Technology",
        question: "Which programming language was developed by Sun Microsystems in 1995?",
        choices: ["JavaScript", "Python", "Java", "C++"],
        answer: "Java"
    },
    {
        category: "Technology",
        question: "What is the full form of HTML?",
        choices: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        category: "Technology",
        question: "Who developed the World Wide Web?",
        choices: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee"
    }
    
];
// Function to filter questions by category
function getQuestionsByCategory(category) {
    return questions.filter(question => question.category === category);
}

const geographyQuestions = getQuestionsByCategory("Geography");
const astronomyQuestions = getQuestionsByCategory("Astronomy");
const literatureQuestions = getQuestionsByCategory("Literature");
const scienceQuestions = getQuestionsByCategory("Science");
const technologyQuestions = getQuestionsByCategory("Technology");

let currentQuestion = 0;
let score = 0;
let currentCategoryQuestions = [];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');

// Function to load a question
function loadQuestion(question) {
    questionElement.textContent = question.question;

    choicesElement.innerHTML = '';
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice, question.answer);
        choicesElement.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(choice, correctAnswer) {
    if (choice === correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < currentCategoryQuestions.length) {
        loadQuestion(currentCategoryQuestions[currentQuestion]);
    } else {
        showResult();
    }
}

// Function to show the result
function showResult() {
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${currentCategoryQuestions.length}!`;
    submitButton.style.display = 'none';

    // Create and append the retry button
    const retryButton = document.createElement('button');
    retryButton.textContent = 'Retry Quiz';
    retryButton.onclick = () => {
        // Reset score and current question
        score = 0;
        currentQuestion = 0;
        // Reload the first question
        loadQuestion(currentCategoryQuestions[currentQuestion]);
        // Clear the result message
        resultElement.textContent = '';
        // Display the submit button again
        submitButton.style.display = 'block';
    };
    resultElement.appendChild(retryButton);
}

// Event listener for the submit button
submitButton.addEventListener('click', () => loadQuestion(currentCategoryQuestions[currentQuestion]));

// Event listeners for radio buttons
const radioButtons = document.querySelectorAll('input[name="categories"]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        currentCategoryQuestions = getQuestionsByCategory(selectedCategory);
        currentQuestion = 0;
        score = 0;
        loadQuestion(currentCategoryQuestions[currentQuestion]);
        
        // Remove the h2 element
        const h2Element = document.querySelector('#quiz h2');
        if (h2Element) {
            h2Element.remove();
        }
    });
});