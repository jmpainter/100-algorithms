function digitDegree(n) {
  let steps = 0;

  while (n.toString().length > 1) {
    steps++;
    n = n
      .toString()
      .split('')
      .map(ele => parseInt(ele))
      .reduce((acc, ele) => acc + ele);
  }
  return steps;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(digitDegree(3242323333));
