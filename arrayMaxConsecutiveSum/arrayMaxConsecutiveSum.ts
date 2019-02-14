function arrayMaxConsecutiveSum(inputArray, k) {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }

  for (let i = k; i < inputArray.length; i++) {
    sum += inputArray[i];
    sum -= inputArray[i - k];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
