function alphabeticShift(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let chars = inputString.split('');
  chars = chars.map(char => {
    let charIndex = alphabet.indexOf(char);
    charIndex++;
    if (charIndex === alphabet.length) {
      charIndex = 0;
    }
    return alphabet.charAt(charIndex);
  });
  return chars.join('');
}

console.log(alphabeticShift('crazy'));
