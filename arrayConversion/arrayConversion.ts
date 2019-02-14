function arrayConversion(inputArray) {
  let resultArray = [];
  let workingArray = inputArray;

  let counter = 1;
  while (workingArray.length > 1) {
    console.log(workingArray);
    for (let i = 0; i <= workingArray.length - 1; i += 2) {
      let sumOrProduct;
      if (counter % 2 === 1) {
        sumOrProduct = workingArray[i] + workingArray[i + 1];
      } else {
        sumOrProduct = workingArray[i] * workingArray[i + 1];
      }
      resultArray.push(sumOrProduct);
    }
    workingArray = resultArray;
    resultArray = [];
    counter++;
  }
  return workingArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
