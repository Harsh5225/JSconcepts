# Quiz App - README

### Overview
This is a simple **Quiz App** built using **JavaScript** that allows users to take a quiz with 5 random questions selected from a predefined set. Users can choose their answers and submit the quiz. Upon submission, the app calculates the score and displays the number of correct answers.

### Key Concepts Covered:
1. **DOM Manipulation**: 
   - Dynamically generating HTML elements using JavaScript (`createElement`, `appendChild`, etc.).
   - Dynamically creating a quiz interface and displaying the result after submission.

2. **Random Question Selection**:
   - Three different approaches to selecting random questions from the predefined `quizArray`:
     - **Set-based approach**: Ensures unique questions are selected.
     - **Sorting-based approach**: Randomly shuffles the array using the `sort()` method.
     - **Swap-based approach**: Selects questions by swapping elements in the array and ensuring no repetition.

3. **Event Handling**:
   - Form submission is handled using the `addEventListener` method to process user answers without refreshing the page.
   - Collecting user input via `FormData` and comparing it with the correct answers.

4. **JavaScript Objects**:
   - Storing the correct answers in an object (`answer`) for easy comparison during result evaluation.

5. **Displaying Results**:
   - After the form submission, the app calculates the score by comparing the selected answers with the correct answers and displays the result dynamically on the page.

### Structure of the Application:
1. **Quiz Array**:
   - The quiz consists of a predefined array (`quizArray`) of objects, each containing a question, a list of options, and the correct answer.

2. **Random Question Selection**:
   - Five random questions are selected from the `quizArray` using one of the following methods:
     - **Using a Set**: Ensures unique questions are selected.
     - **Using `sort()`**: Randomly shuffles the array and selects the first 5 items.
     - **Using a Swap Method**: Swaps random elements in the array and selects the first 5 unique questions.

3. **Form Generation**:
   - For each selected question, a `div` element is created that contains:
     - A `label` for the question.
     - Multiple `input` radio buttons for the answer choices.
   - The answers are stored in an object (`answer`) for comparison with the user's selected answers.

4. **Score Calculation**:
   - Once the user submits the form, the app compares the user's answers with the correct ones and calculates the score.
   - The score is displayed on the page after submission.

### Usage:
1. The user is presented with 5 random questions with multiple-choice options.
2. They can select one answer per question and submit the quiz.
3. After submitting, the app will calculate and display the score based on the number of correct answers.

### Features:
- **Randomized Quiz Generation**: The questions are selected randomly from a predefined set.
- **Radio Button Inputs**: Users can select one answer per question.
- **Result Display**: After submission, the app displays the total number of correct answers.

### Technologies Used:
- **HTML**: Basic structure for the quiz and result display.
- **CSS**: Basic styling (assumed to be handled elsewhere).
- **JavaScript**: Core functionality including DOM manipulation, event handling, random question selection, and score calculation.

### Functionality Overview:
1. **Dynamic Quiz Generation**: 
   - The quiz generates 5 random questions from the predefined set (`quizArray`).
   - Users select answers using radio buttons for each question.
2. **Random Selection of Questions**: 
   - Three methods are available to select random questions: Set-based, sort-based, and swap-based.
3. **Answer Submission and Score Calculation**:
   - Upon submission, the app checks the user's answers and calculates the score.
   - The score is then displayed dynamically on the page.


---
