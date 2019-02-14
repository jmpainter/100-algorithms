function alternatingSums(people) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < people.length; i++) {
    if (i % 2 === 0) {
      evenSum += people[i];
    } else {
      oddSum += people[i];
    }
  }
  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
