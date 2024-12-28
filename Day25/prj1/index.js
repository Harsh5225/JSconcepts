const quizArray = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Processing Unit",
      "Control Processing Unit",
    ],
    answer: "Central Processing Unit",
    correctAnswer: true,
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    answer: "O(log n)",
    correctAnswer: true,
  },
  {
    question:
      "Which programming language is known as the backbone of web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
    correctAnswer: true,
  },
  {
    question: "What is the full form of RAM?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Rapid Access Module",
      "Random Allocation Memory",
    ],
    answer: "Random Access Memory",
    correctAnswer: true,
  },
  {
    question: "What is the primary purpose of an operating system?",
    options: [
      "To run programs faster",
      "To manage hardware and software resources",
      "To handle databases",
      "To design software",
    ],
    answer: "To manage hardware and software resources",
    correctAnswer: true,
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    answer: "Stack",
    correctAnswer: true,
  },
  {
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    answer: "O(n^2)",
    correctAnswer: true,
  },
  {
    question: "Which protocol is used to send email?",
    options: ["HTTP", "FTP", "SMTP", "IMAP"],
    answer: "SMTP",
    correctAnswer: true,
  },
  {
    question:
      "What is the name of the process of finding and fixing errors in software?",
    options: ["Testing", "Debugging", "Compiling", "Interpreting"],
    answer: "Debugging",
    correctAnswer: true,
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transmission Protocol",
      "HyperText Transfer Protocol",
      "High Transmission Transfer Protocol",
      "Hyper Transfer Text Protocol",
    ],
    answer: "HyperText Transfer Protocol",
    correctAnswer: true,
  },
  {
    question:
      "Which type of database uses tables, rows, and columns to store data?",
    options: [
      "NoSQL Database",
      "Relational Database",
      "Graph Database",
      "Key-Value Database",
    ],
    answer: "Relational Database",
    correctAnswer: true,
  },
  {
    question: "What is the smallest unit of data in a computer?",
    options: ["Byte", "Bit", "Nibble", "Word"],
    answer: "Bit",
    correctAnswer: true,
  },
  {
    question: "What does DNS stand for?",
    options: [
      "Data Name Service",
      "Domain Name System",
      "Dynamic Network Service",
      "Domain Network System",
    ],
    answer: "Domain Name System",
    correctAnswer: true,
  },
  {
    question:
      "Which sorting algorithm is considered the fastest for large datasets?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
    answer: "Merge Sort",
    correctAnswer: true,
  },
  {
    question: "What is an example of a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    answer: "MongoDB",
    correctAnswer: true,
  },
];

// 1st approach
// function randomSelection() {
//   const data = new Set();
//   while (data.size != 5) {
//     const index = Math.floor(Math.random() * quizArray.length);

//     data.add(quizArray[index]);
//   }
//   return [...data];
// }



// 2nd tareeka
// sort function  randomly sort // nlogn
// function randomlySort(){
//   quizArray.sort(()=>Math.random()-0.5);
//   return quizArray.slice(0,5);
// }

// 3rd approach dsa  // O(number of element to be selected)
function dsaSwap(){
  const arr=[];
  let length=quizArray.length;
  for(let i=0;i<5;i++){
    let index=Math.floor(Math.random()*length);
    arr.push(quizArray[index]);
    [quizArray[index],quizArray[length-1]]=[quizArray[length-1],quizArray[index]];
    length-=1;
  }
  return arr;
}
const answer = {};
let data = dsaSwap();
const form = document.getElementById("quizForm");
data.forEach((dataval, questionIdx) => {
  // console.log(dataval.question);
  const div_ele = document.createElement("div");
  div_ele.className = "question";

  const label_ele = document.createElement("label");
  label_ele.innerText = `${questionIdx + 1}.${dataval.question}`;
  div_ele.appendChild(label_ele);

  dataval.options.forEach((val, optionIdx) => {
    const wrapper_ele = document.createElement("label"); // Label for each option

    const input_ele = document.createElement("input");
    input_ele.type = "radio";
    input_ele.name = `q${questionIdx + 1}`; // Grouping by question index
    // console.log(input_ele.name);
    // console.log(dataval.answer);

    answer[input_ele.name] = dataval.answer;
    input_ele.value = val;

    const text_ele = document.createTextNode(val);

    wrapper_ele.appendChild(input_ele);
    wrapper_ele.appendChild(text_ele);

    div_ele.appendChild(wrapper_ele);
  });

  form.appendChild(div_ele);
});
const button = document.createElement("button");
button.type = "submit";
button.innerText = "Submit";
form.append(button);
console.log(answer);

const result_ele = document.createElement("div");
result_ele.className = "result";
result_ele.id = "result";
const heading = document.createElement("h3");
heading.innerText = "Quiz Result";
const para_ele = document.createElement("p");
para_ele.id = "score";
result_ele.append(heading);
result_ele.append(para_ele);
document.querySelector(".container").append(result_ele);

// result check

let result = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newForm = new FormData(form);
  let result = 0;
  for (let [key, val] of newForm.entries()) {
    if (answer[key] == val) result++;
  }

  console.log(`You got ${result} correct answers out of ${data.length}`);
  const resultVisi = document.getElementById("result");
  console.log(resultVisi);

  resultVisi.style.display = "block";
  document.getElementById("score").innerText = `You scored ${result} out of 5!`;
  result = 0;
});
