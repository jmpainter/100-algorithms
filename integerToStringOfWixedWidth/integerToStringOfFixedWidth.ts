function integerToStringOfFixedWidth(number, width) {
  let numToString = number.toString();
  if (numToString.length < width) {
    const diff = width - numToString.length;
    const addZeros = '0'.repeat(diff);
    return addZeros + numToString;
  } else if (numToString.length > width) {
    const diff = numToString.length - width;
    return numToString.slice(-diff);
  } else {
    return numToString;
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
