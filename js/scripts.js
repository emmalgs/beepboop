// Business Logic

function beepBooper(input) {
  const number = inputChecker(input);
  if (number) {
    const numberArray = [];
    for (let i = 0; i <= number; i++) {
      numberArray.push(i.toString());
    }
    const beepedArray = numberArray.map(function(num) {
      if (num.includes(3)) {
        return num = "Won't you be my neighbor?"
      } else if (num.includes(2)) {
        return num = "Boop!";
      } else if (num.includes(1)) {
        return num = "Beep!";
      } else { return num; }
    })
    return beepedArray;
  } else { return false; }
}

function inputChecker(userInput) {
  const digitsRegex = /\d/g;
  const inputCheck = userInput.trim();
  if (Number(inputCheck) > 1000) {
    return false
  } else if (digitsRegex.test(inputCheck)) {
    return inputCheck.match(digitsRegex).join("")
  } else if (!Number(inputCheck)) {
    return false;
  } else { return inputCheck; }
}

// UI logic

function getUserInput(e) {
  e.preventDefault();
  const outputParagraph = document.createElement("p");
  const outputDisplay = document.getElementById("output-container");
  const input = document.getElementById("input").value;
  const output = beepBooper(input);
  outputParagraph.innerText = output.join(", ");
  outputDisplay.append(outputParagraph)
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", getUserInput)
})