// JavaScript code for handling the form
const countryLifeExpectancy = {
    india: 67,
    uk: 81,
    canada: 82,
    usa: 76,
    australia: 83,
    germany: 81,
    france: 82,
    italy: 83,
    spain: 83,
    brazil: 75,
    japan: 84,
    china: 77,
    south_africa: 64,
    mexico: 75,
    russia: 72,
    new_zealand: 82,
    netherlands: 83,
    sweden: 83,
    norway: 84,
    switzerland: 85,
    singapore: 85
    // Add more countries and their life expectancy as needed
};

let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const resultSection = document.getElementById('result-section');
const personalInfoSection = document.getElementById('personal-info-section');
const questionsSection = document.getElementById('questions-section');
const lifeExpectancyDisplay = document.getElementById('live-estimation'); // Sidebar element

let answers = {};



    // Add event listeners to all selectable options
    const selectableOptions = document.querySelectorAll('.selectable-option');
    selectableOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'selected' class from all options in the question
            const question = option.closest('.question');
            const currentSelected = question.querySelector('.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }

            // Mark the clicked option as selected
            option.classList.add('selected');

            // Update life expectancy immediately
            updateLiveLifeExpectancy();
        });
    });



function showQuestions() {
    personalInfoSection.style.display = 'none';
    questionsSection.style.display = 'block';
    updateQuestionVisibility();
}



function showNextQuestion() {
    const currentQuestionElement = questions[currentQuestion];
    const selectedOption = currentQuestionElement.querySelector('.selectable-option.selected');

    if (!selectedOption) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestionVisibility();
        updateLiveLifeExpectancy(); // Update the sidebar after every question
    } else {
        calculateLifeExpectancy();
    }
}








function showPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestionVisibility();
    }
}



function updateQuestionVisibility() {
    questions.forEach((q, index) => {
        q.style.display = index === currentQuestion ? 'block' : 'none';
    });

    prevButton.style.display = currentQuestion === 0 ? 'none' : 'inline-block';
    nextButton.style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
    submitButton.style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}







function updateLiveLifeExpectancy() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;

    // Default base life expectancy to 73 if no country is selected
    const baseLifeExpectancy = countryLifeExpectancy[country] || 73;

    const maxLifeExpectancyFemale = 95;
    const maxLifeExpectancyMale = 93;

    let score = 0;
    


    // Calculate total score based on selected options
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
        const selectedOption = question.querySelector('.selected');
        if (selectedOption) {
            const value = parseInt(selectedOption.getAttribute('data-value'));
            score += value;
        }
    });

    // Determine final life expectancy based on gender and country base life expectancy
    let finalLifeExpectancy;
    if (gender === 'female') {
        finalLifeExpectancy = Math.min(maxLifeExpectancyFemale, baseLifeExpectancy + score);
    } else if (gender === 'male') {
        finalLifeExpectancy = Math.min(maxLifeExpectancyMale, baseLifeExpectancy + score);
    } else {
        finalLifeExpectancy = baseLifeExpectancy + score;
    }

    const estimatedYears = Math.max(0, finalLifeExpectancy - age);

    const yearsAddedOrTaken = score;

    // Determine if the lifestyle is healthy
    let lifestyleMessage;
    if (finalLifeExpectancy >= baseLifeExpectancy) {
        lifestyleMessage = "You have a very healthy lifestyle!";
    } else if (finalLifeExpectancy < baseLifeExpectancy) {
        lifestyleMessage = "You may want to consider improving your lifestyle for better health.";
    } else {
        lifestyleMessage = "We don't know how you're still alive. Please consult a doctor.";
    }

    // Update the life expectancy display
    const lifeExpectancyDisplay = document.getElementById('live-estimation');
    const lifeExpectancyDetails = document.getElementById('result');

    lifeExpectancyDisplay.textContent = `${Math.round(finalLifeExpectancy)} years`;
    lifeExpectancyDetails.innerHTML = `
        Based on your age and habits, you are estimated to live for approximately ${Math.round(estimatedYears)} more years.<br>
        Your estimated life expectancy is ${Math.round(finalLifeExpectancy)} years.<br>
        ${lifestyleMessage}
    `;
}









  function calculateLifeExpectancy() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
  
    // Default base life expectancy to 73 if no country is selected
    const baseLifeExpectancy = countryLifeExpectancy[country] || 73;
  
    const maxLifeExpectancyFemale = 95;
    const maxLifeExpectancyMale = 93;
  
    let score = 0;
  
    // Calculate total score based on selected options
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
      const selectedOption = question.querySelector('.selected');
      if (selectedOption) {
        const value = parseInt(selectedOption.getAttribute('data-value'));
        score += value;
      }
    });
  
    // Determine final life expectancy based on gender and country base life expectancy
    let finalLifeExpectancy;
    if (gender === 'female') {
      finalLifeExpectancy = Math.min(maxLifeExpectancyFemale, baseLifeExpectancy + score);
    } else if (gender === 'male') {
      finalLifeExpectancy = Math.min(maxLifeExpectancyMale, baseLifeExpectancy + score);
    } else {
      finalLifeExpectancy = baseLifeExpectancy + score;
    }
  
    const estimatedYears = Math.max(0, finalLifeExpectancy - age);
  
    const yearsAddedOrTaken = score;
  
    // Determine if the lifestyle is healthy
    let lifestyleMessage;
    if (finalLifeExpectancy >= baseLifeExpectancy) {
      lifestyleMessage = "You have a very healthy lifestyle!";
    } else if (finalLifeExpectancy <= baseLifeExpectancy) {
      lifestyleMessage = "You may want to consider improving your lifestyle for better health.";
    } else {
      lifestyleMessage = "We dont know How ur still alive Please Take constant a doctor before anything happens";
    }
  
    // Display results
    document.getElementById('result').innerHTML = `
      Hello ${name},<br>
      Based on your age and habits, you are estimated to live for approximately ${Math.round(estimatedYears)} more years.<br>
      Your estimated life expectancy is ${Math.round(finalLifeExpectancy)} years.<br>
      ${lifestyleMessage}
    `;
  
    document.getElementById('questions-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
  }










// Function to handle selection of options
function selectOption(event) {
    const selectedOption = event.target;
    const question = selectedOption.closest('.question');

    // Remove 'selected' class from previously selected options
    question.querySelectorAll('.selectable-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add 'selected' class to the clicked option
    selectedOption.classList.add('selected');
}



document.getElementById('submit-button').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission
    updateLiveLifeExpectancy();
    calculateLifeExpectancy();
});




// Attach event listeners to options
document.querySelectorAll('.selectable-option').forEach(option => {
    option.addEventListener('click', selectOption);
});









function restartForm() {
    document.getElementById('lifeExpectancyForm').reset();
    currentQuestion = 0;
    personalInfoSection.style.display = 'block';
    questionsSection.style.display = 'none';
    resultSection.style.display = 'none';
    lifeExpectancyDisplay.textContent = "-- years"; // Reset sidebar

    // Reset selections
    document.querySelectorAll('.selectable-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    answers = {};
}



document.addEventListener('DOMContentLoaded', () => {
    updateQuestionVisibility();
});


