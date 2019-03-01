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

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
