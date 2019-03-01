function confirmEnding(str, target) {
  if (str.slice(-target.length) === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
