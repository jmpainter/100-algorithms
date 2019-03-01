function containsCloseNums(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < i + k + 1; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
