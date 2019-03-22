function flattenArray(arr) {
  const result = [];

  while (arr.length > 0) {
    const item = arr.pop();
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      arr.push(...item);
    }
  }
  return result;
}

console.log(flattenArray([[['a']], [['b']]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
