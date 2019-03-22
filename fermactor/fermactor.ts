function fermactor(n) {
  let a = 1;
  while (true) {
    const result = Math.pow(a, 2) - n;
    if (Math.sqrt(result) % 1 === 0) {
      return [a, Math.sqrt(result)];
    }
    a++;
  }
}

console.log(fermactor(15));
console.log(fermactor(21));
