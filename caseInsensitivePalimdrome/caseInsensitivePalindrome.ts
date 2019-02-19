function isCaseInsensitivePalindrome(string) {
  return string.toLowerCase() === string.split('').reverse().join('').toLowerCase();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));