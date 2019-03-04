function electionsWinners(votes, k) {
  votes = votes.sort((a, b) => b - a);
  let max = votes[0];
  let couldWin = 1;
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] > max - k) {
      couldWin++;
    }
  }
  return couldWin;
}

console.log(electionsWinners([2, 3, 5, 2], 0));
