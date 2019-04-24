function lateRide(n) {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;

  const time = hours.toString() + minutes.toString()
  const total = time.split('').map(number => parseInt(number)).reduce((acc, ele) => acc + ele);
  return total;
}



console.log(lateRide(240));
console.log(lateRide(808));
