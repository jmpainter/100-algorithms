function allLongestStrings(inputArray) {
  let longestStringLength = 0;
  inputArray.forEach(string => {
    if (string.length > longestStringLength) {
      longestStringLength = string.length;
    }
  });
  const longestStrings = [];
  inputArray.forEach(string => {
    if (string.length === longestStringLength) {
      longestStrings.push(string);
    }
  });
  return longestStrings;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
