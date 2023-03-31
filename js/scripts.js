function beepBooper(number) {
  const numberArray = [];
  for (let i = 0; i <= number; i++) {
    numberArray.push(i);
  }
  const beepedArray = numberArray.map(function(num) {
    if (num === 1) {
      return num = "Beep!"
    } else { return num }
  })
  return beepedArray;
}