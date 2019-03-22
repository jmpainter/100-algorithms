function findEmailDomain(address) {
  const index = address.lastIndexOf('@');
  return address.slice(index + 1);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
