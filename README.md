# ⏳ Life Expectancy Calculator

A clean, interactive, and dynamic multi-step web application that calculates a user's estimated life expectancy based on demographic factors and daily lifestyle choices. Built using semantic HTML5, custom styled interactive options, and structured data scoring.

## ✨ Features

- **Personal Information Gathering:** Captures essential details such as Name, Age, Gender, and a wide selection of globally diverse countries.
- **Interactive Multi-Step Questionnaire:** Splits 12 deep-dive lifestyle questions into clean, scannable visual sections instead of overwhelming the user on a single page.
- **Custom Selection Mechanism:** Uses custom styled `div` components (`.selectable-option`) embedded with custom weighted scoring datasets (`data-value`).
- **Real-Time Sidebar Tracker:** Features a sticky side widget that updates or highlights changes to the user's running calculation during their progress.
- **Dedicated BMI Navigation:** Includes a redirection link enabling users to jump over to a custom secondary BMI calculator page.

---

## 📊 Scoring & Calculation Parameters

The calculator tracks life expectancy by starting with a baseline from demographic data and applying specific health risk/benefit modifiers:

| Category | High Impact Positives | High Impact Negatives |
| :--- | :--- | :--- |
| **🚭 Habits** | Never Smoking (`+5`) | Regular Smoking (`-10`) |
| **🏃 Fitness** | Daily Exercise (`+4`) | Sedentary Lifestyle (`-3`) |
| **🥗 Nutrition** | Balanced/Plant-based (`+2`) | Frequent Junk Food (`-3`) |
| **🍷 Alcohol** | Abstaining (`+3`) | Heavy Consumption (`-5`) |
| **😴 Sleep** | 7–9 Hours Optimal (`+3`) | Under 5 Hours (`-3`) |
| **🧬 Medical** | No Chronic Family History (`+1`) | Heavy Genetic Risks (`-4`) |
| **⚖️ Weight** | Normal BMI Range (`+2`) | Obese BMI Range (`-4`) |

---

## 🛠️ Built With

- **HTML5:** Semantic architecture, multi-step layout sections (`#personal-info-section`, `#questions-section`), and customized data attributes (`data-value`).
- **CSS3 (`styles.css`):** Configured for layout stability, flexbox form button centers, custom selection state indicators, and a fixed sidebar widget container.
- **JavaScript (`script.js`):** Powers the form state transitions (`showQuestions`, `showNextQuestion`, `showPrevQuestion`), data-attribute parsing, mathematical aggregation, and form resets.

---

## 🚀 How to Run the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/life-expectancy-calculator.git](https://github.com/your-username/life-expectancy-calculator.git)
   
