function houseNumbersSum(inputArray) {
  let sum = 0;
  for (let number of inputArray) {
    if (number === 0) {
      return sum;
    } else {
      sum += number;
    }
  }
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
