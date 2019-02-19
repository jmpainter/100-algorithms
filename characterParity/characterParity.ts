function characterParity(symbol) {
  debugger;
  if (isNaN(parseInt(symbol))) {
    return 'not a digit';
  } else if (parseInt(symbol) % 2 === 0) {
    return 'even';
  } else if (parseInt(symbol) % 2 === 1) {
    return 'odd';
  }
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
