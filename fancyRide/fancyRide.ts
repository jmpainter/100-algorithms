function fancyRide(l, fares) {
  const types = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * l <= 20) {
      return types[i];
    }
  }
  return 'Cannot afford a ride';
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(2, [0.3, 0.5, 0.7, 1, 1.3]));
