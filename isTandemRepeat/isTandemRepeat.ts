function isTandemRepeat(inputString) {
  if (inputString.length % 2 === 1) {
    return false;
  }
  return (
    inputString.slice(0, inputString.length / 2) ===
    inputString.slice(-inputString.length / 2)
  );
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('qqqt'));
console.log(isTandemRepeat('2w2ww'));
console.log(isTandemRepeat('frogfrog'));
