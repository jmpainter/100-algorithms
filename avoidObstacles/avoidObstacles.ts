function avoidObstacles(inputArray) {
  let maxRow = 0;
  let currentRow = 0;
  const max = inputArray.sort().reverse()[0];

  for (let i = 0; i < max; i++) {
    if (inputArray.includes(i)) {
      currentRow++;
      if (currentRow > maxRow) {
        maxRow = currentRow;
      }
    } else {
      currentRow = 0;
    }
  }
  return maxRow + 1;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
