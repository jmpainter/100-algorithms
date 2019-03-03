function depositProfit(deposit, rate, threshold) {
  let years = 0;
  let balance = deposit;
  while (balance <= threshold) {
    balance += (rate / 100) * balance;
    years++;
  }
  return years;
}

console.log(depositProfit(100, 20, 170));
