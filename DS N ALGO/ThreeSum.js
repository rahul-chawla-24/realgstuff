var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1; // low
    let k = nums.length - 1; // high
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
        continue;
      }
      if (sum < 0) {
        j++;
        continue;
      }
      if (sum > 0) {
        k--;
        continue;
      }
    }
  }

  return result;
};

// Time complexity is O(n*2)
// space complexity is O(1)
