const button = document.querySelector("button");

button.addEventListener("click", () => {
  // read the data
  const input1 = document.getElementById("first");
  const num1 = Number(input1.value);
  const input2 = document.getElementById("second");
  const num2 = Number(input2.value);
  if (isNaN(num1) || isNaN(num2)) {
    return;
  }
  const result = num1 + num2;
  // output the result
  const resultDis = document.getElementById("result");
  resultDis.textContent = `Result: ${result}`;
});
