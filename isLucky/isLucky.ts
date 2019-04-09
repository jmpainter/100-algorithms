function isLucky(n) {
  const numArray = n
    .toString()
    .split('')
    .map(digitString => parseInt(digitString, 10));
  const half = numArray.length / 2;
  const firstHalfSum = numArray.slice(0, half).reduce((acc, ele) => acc + ele);
  const secondHalfSum = numArray.slice(-half).reduce((acc, ele) => acc + ele);
  return firstHalfSum === secondHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
