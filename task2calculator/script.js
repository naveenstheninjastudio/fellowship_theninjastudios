const btns = document.querySelectorAll(".btn");
let displayBox = document.querySelector(".display");
display = () => {
  displayBox.innerText = btn.innerText;
};
for (let i = 0; i < btns.length; i++) {
  let button = btns[i];
  button.addEventListener("click", (e) => {
    if (button.innerText === "AC") {
      displayBox.innerText = "";
    } else if (button.innerText === "CLR") {
      displayBox.innerText = displayBox.innerText.slice(0, -1);
    } else if (button.innerText === "=") {
      displayBox.innerText = eval(displayBox.innerText);
    } else {
      displayBox.innerText += button.innerText;
    }
  });
}

document.addEventListener("keydown", (Event) => {
  const calKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
  ];
  if (calKeys.includes(Event.key)) {
    displayBox.innerText += Event.key;
  } else if (Event.key === "Backspace") {
    displayBox.innerText = displayBox.innerText.slice(0, -1);
  } else if (Event.key === "=" || Event.key === "Enter") {
    displayBox.innerText = eval(displayBox.innerText);
  }
});
