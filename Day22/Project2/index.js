document.addEventListener("click", (e) => {
  const circle = document.createElement("div");
  circle.className = "circle";
  const greetings = [
    "Hi",
    "Hello",
    "Hey",
    "Welcome",
    "Hola",
    "Bonjour",
    "Howdy",
    "Namaste",
    "Greetings",
    "Salam",
    "Cheers",
    "Good Day",
    "Whats Up",
    "Blessings",
    "Peace",
    "Yo",
    "Aloha",
    "Ciao",
    "Shalom",
    "Sup",
  ];
  const idx=Math.floor(Math.random()*greetings.length);
  // console.log(idx)
  circle.textContent=greetings[idx];
  //  circle.classList.add('circle');
  const x = e.clientX;
  const y = e.clientY;

  circle.style.left = `${x-25}px`;
  circle.style.top = `${y-25}px`;

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // console.log(r, g, b);
  circle.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.body.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 5000);
});
