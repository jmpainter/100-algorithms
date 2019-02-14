function adjacentElementsProduct(inputArray) {
  let largestProduct = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    if (currentProduct > largestProduct) {
      largestProduct = currentProduct;
    }
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
