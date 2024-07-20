function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(i, j);
      }
    }
  }
}
const nums = [2, 8, 7, 15];
const target = 9;
twoSum(nums, target);
