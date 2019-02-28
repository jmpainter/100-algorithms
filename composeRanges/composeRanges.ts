function composeRanges(nums) {
  const ranges = [[nums[0], nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    if (ranges[ranges.length - 1][1] + 1 === nums[i]) {
      ranges[ranges.length - 1][1] = nums[i];
    } else {
      ranges.push([nums[i], nums[i]]);
    }
  }

  return ranges.map(range => {
    if (range[0] === range[1]) {
      return range[0].toString();
    } else {
      return range[0].toString() + '->' + range[1].toString();
    }
  });
}

console.log(composeRanges([-1, 1, 2, 6, 7, 9]));
