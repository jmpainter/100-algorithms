function companyBotStrategy(trainingData) {
  let sum = 0;
  let numberCorrect = 0;
  trainingData.forEach(pair => {
    if (pair[1] === 1) {
      sum += pair[0];
      numberCorrect += 1;
    }
  });
  return sum > 0 ? sum / numberCorrect : 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
