function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  for (let i = 1; i < inputArray.length; i++) {
    const tempDiff = Math.abs(inputArray[i] - inputArray[i - 1]);
    if (tempDiff > maxDiff) {
      maxDiff = tempDiff;
    }
  }
  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, -4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, -4, 1, 10]));
