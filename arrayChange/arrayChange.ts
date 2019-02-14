function arrayChange(inputArray) {
  let count = 0;

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      const increment = inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] += increment;
      count += increment;
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 2, 1]));
