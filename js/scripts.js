
// Business Logic

function beepBooper(input) {
  const number = Number(input.trim());
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
}

function inputChecker(userInput) {
  const digitsRegex = /\d/g;
  const inputCheck = userInput.trim().match(digitsRegex).join("");
  if (!Number(inputCheck)) {
    return false;
  } else { return inputCheck; }
}