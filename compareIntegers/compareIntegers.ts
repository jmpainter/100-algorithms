function compareIntegers(a, b) {
  let numA = parseInt(a);
  let numB = parseInt(b);
  if (numA === numB) {
    return 'equal';
  } else if (numA > numB) {
    return 'greater';
  } else {
    return 'less';
  }
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
