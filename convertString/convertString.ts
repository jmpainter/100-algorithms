function convertString(s, t) {
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr2 < t.length) {
    const foundIndex = s.indexOf(t.charAt(ptr2), ptr1);
    if (foundIndex === -1) {
      return false;
    } else {
      ptr1 = foundIndex + 1;
      ptr2++;
    }
  }
  return true;
}

function convertString2(s, t) {
  let word = '';
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === t.charAt(counter)) {
      word += s.charAt(i);
      counter++;
    }
    if (word === t) {
      return true;
    }
  }
  return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));

console.log(convertString2('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString2('addbyca', 'abcd'));
