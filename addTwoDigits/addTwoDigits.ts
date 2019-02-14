function addTwoDigits(n) {
  const nums = n.toString().split('');
  return Number(nums[0]) + Number(nums[1]);
}

console.log(addTwoDigits(29));
