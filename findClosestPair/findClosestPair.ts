function findClosestPair(numbers, sum) {
  const distances = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      if (numbers[i] + numbers[j] === sum) {
        distances.push(j - i);
      }
    }
  }
  if (distances.length === 0) {
    return -1;
  } else {
    return distances.sort()[0];
  }
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
