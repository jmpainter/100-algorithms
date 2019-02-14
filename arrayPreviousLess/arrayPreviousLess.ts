function arrayPreviousLess(items) {
  const result = [];

  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[j] < items[i]) {
        result.unshift(items[j]);
        break;
      } else if (j === 0) {
        result.unshift(-1);
      }
    }
  }
  return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
