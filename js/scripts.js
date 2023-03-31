function beepBooper(number) {
  const numberArray = [];
  for (let i = 0; i <= number; i++) {
    numberArray.push(i.toString());
  }
  const beepedArray = numberArray.map(function(num) {
    if (num.includes(2)) {
      return num = "Boop!";
    } else if (num.includes(1)) {
      return num = "Beep!";
    } else { return num; }
  })
  return beepedArray;
}