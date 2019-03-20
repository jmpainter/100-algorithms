function extractEachKth(inputArray, k) {
  return inputArray.filter((element, index) => index % k !== 0);

  // const retArray = [];
  // inputArray.forEach((element, index) => {
  //   if (index % k !== 0) {
  //     retArray.push(element);
  //   }
  // });
  // return retArray;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
