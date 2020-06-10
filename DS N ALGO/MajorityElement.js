/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums = nums.sort();
  let len = Math.floor(nums.length / 2);
  return nums[len];
};
