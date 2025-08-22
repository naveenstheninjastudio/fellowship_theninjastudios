const btn = document.querySelectorAll(".keypad");
console.log(btn);
let displayBox = document.querySelector(".display");
display = () => {
  displayBox.innerText = btn.innerText;
};
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
  } else if (Event.key === "=" || Event.key === "Enter") {
    displayBox.innerText = eval(displayBox.innerText);
  } else if (Event.key === "Backspace") {
    displayBox.innerText = displayBox.innerText.slice(0, -1);
  }
});
