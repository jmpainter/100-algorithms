function crossingSum(matrix, row, col) {
  const rowSum = matrix[row].reduce((acc, ele) => acc + ele);

  let colSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i !== row) {
      colSum += matrix[i][col];
    }
  }
  return rowSum + colSum;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));
