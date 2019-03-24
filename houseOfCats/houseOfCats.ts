function houseOfCats(legs) {
  if (legs % 2 === 1) {
    return -1;
  }
  const result = [];
  // divide by 4, see if remainder is 2
  if (legs % 4 === 2) {
    result.push(1);
    legs -= 2;
  }
  const numCats = Math.floor(legs / 4);
  for (let i = 1; i <= numCats; i++) {
    result.push(2 * i);
  }
  return result;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(12));
