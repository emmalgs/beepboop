// Business Logic

function beepBooper(input) {
  const number = inputChecker(input);
  if (number) {
    const numberArray = [];
    for (let i = 0; i <= number; i++) {
      numberArray.push(i.toString());
    }
    const beepedArray = numberArray.map(function(num) {
      return beepTranslator(num)
    })
    return beepedArray;
  } else { return false; }
}

function beepTranslator(num) {
  if (num.includes(3)) {
    return num = "Won't you be my neighbor?"
  } else if (num.includes(2)) {
    return num = "Boop!";
  } else if (num.includes(1)) {
    return num = "Beep!";
  } else if (num.includes(4)) {
    return num = "Bop"
  } else if (num.includes(5)) {
    return num = "Boing"
  } else if (num.includes(6)) {
    return num = "Honk"
  } else if (num.includes(7)) {
    return num = "Bong"
  } else if (num.includes(8)) {
    return num = "Bing"
  } else if (num.includes(9)) {
    return num = "Bang"
  } else if (num.includes(0)) {
    return num = "Oh"
  } else { return num; }
}

function beepReverser(input) {
  const reversed = input.reverse();
  return reversed;
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
  const input = document.getElementById("input").value;
  displayBeepBoop(input);
}

function displayBeepBoop(input) {
  const outputParagraph = document.createElement("div");
  outputParagraph.setAttribute("id", "text")

  const outputText = document.getElementById("output-text");
  const output = beepBooper(input);
  outputParagraph.innerText = output.join(" ");
  outputText.append(outputParagraph);
  typewriter(output)

  const outputDisplay = document.getElementById("output-container");
  outputDisplay.removeAttribute("class", "hidden");

  const formDisplay = document.querySelector("#machine");
  formDisplay.setAttribute("class", "hidden")

  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", reset);

  const reverseButton = document.getElementById("reverse");
  reverseButton.addEventListener("click", function(){
    const reversedInput = beepReverser(output);
    reverseReset();
    outputParagraph.innerText = reversedInput.join(" ");
    outputText.append(outputParagraph);


  })
}

function typewriter(input) {
  const typerwriterDisplay = document.getElementById("typewriter");
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;

  function type() {
    typerwriterDisplay.innerHTML = currentPhrase.join("")
    if (i < input.length) {
      if (!isDeleting && j <= input[i].length) {
        currentPhrase.push(input[i][j]);
        j++
      }
      if (isDeleting && j <= input[i].length) {
        j = 0;
      }
      if (j == input[i].length) {
        isDeleting = true;
      }
      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i == input.length) {
          i = 0
        }
      }
    }
    setTimeout(type, 200);
  }
  type()
}

function reverseReset() {
  const text = document.getElementById("text");
  text.remove();
}

function reset() {
  const outputDisplay = document.getElementById("output-container")
  outputDisplay.setAttribute("class", "hidden")

  const text = document.getElementById("text");
  text.remove();

  const formDisplay = document.querySelector("#machine");
  formDisplay.removeAttribute("class", "hidden")

  const input = document.getElementById("input")
  input.value = ''
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", getUserInput)
})