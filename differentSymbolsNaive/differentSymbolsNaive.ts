function differentSymbolsNaive(s) {
  const map = {};
  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  return Object.keys(map).length;
}

function differentSymbolsNaive2(s) {
  const uniqueChars = new Set();
  for (let char of s) {
    uniqueChars.add(char);
  }
  return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive2('cabca'));
