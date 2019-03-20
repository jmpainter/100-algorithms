function extractMatrixColumn(matrix, column) {
  const retArray = [];
  matrix.forEach((row, index) => {
    retArray.push(matrix[index][column]);
  });
  return retArray;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
