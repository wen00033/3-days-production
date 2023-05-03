const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const heading = document.querySelector("h1");

heading.onmousemove = function (event) {
  setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter) => letters[Math.floor(Math.random() * 26)])
      .join("");
  }, 30);
};
