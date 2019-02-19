function checkPalindrome(inputString) {
  const map = {};
  for (let char of inputString) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  let oddCount = 0;
  for (let key in map) {
    if (map[key] % 2 === 1) {
      oddCount++;
    }
  }
  return oddCount > 1 ? false : true;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
