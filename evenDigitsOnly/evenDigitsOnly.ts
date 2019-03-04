function evenDigitsOnly(n) {
  const digits = n
    .toString()
    .split('')
    .map(num => parseInt(num));

  return digits.every(num => num % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
