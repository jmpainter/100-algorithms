function almostIncreasingSequence(sequence) {
  debugger;
  let numDecreasing = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      numDecreasing++;
      if (
        sequence[i + 1] <= sequence[i - 1] &&
        sequence[i] <= sequence[i - 2]
      ) {
        return false;
      }
    }
  }
  return numDecreasing <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 3, 2]));
console.log(almostIncreasingSequence([1, 2, 3, 2]));
console.log(almostIncreasingSequence([1, 2, 3, 3, 3]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]));

console.log(almostIncreasingSequence([[1, 3, 2]]));
console.log(almostIncreasingSequence([[10, 1, 2, 3, 4, 5]]));
console.log(almostIncreasingSequence([[0, -2, 5, 6]]));
console.log(almostIncreasingSequence([[1, 1]]));
console.log(almostIncreasingSequence([[1, 2, 3, 4, 3, 6]]));
console.log(almostIncreasingSequence([[1, 2, 3, 4, 99, 5, 6]]));

console.log(almostIncreasingSequence([1, 2, 0, 1, 2])); // false
// console.log(almostIncreasingSequence([0,1,3,2,4]));
