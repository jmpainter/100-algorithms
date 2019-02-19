// function chunkyMonkey(arr, size) {
//   let counter = 0;
//   let newArray = [];
//   const returnArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     counter++;
//     newArray.push(arr[i]);
//     if (counter === size) {
//       returnArr.push(newArray);
//       newArray = [];
//       counter = 0;
//     }
//   }
//   if (newArray.length > 0) {
//     returnArr.push(newArray);
//   }
//   return returnArr;
// }

function chunkyMonkey(arr, size) {
  let count = 0;
  const returnArray = [];
  while (count < arr.length) {
    returnArray.push(arr.slice(count, (count += size)));
  }
  return returnArray;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
