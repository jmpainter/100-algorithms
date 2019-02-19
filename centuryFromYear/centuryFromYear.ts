function centuryFromYear(year) {
  let century = Math.floor(year / 100);
  if (year % 100 > 0) {
    century++;
  }
  return century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
