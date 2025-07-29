// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// shrinking window technique.
const MinimumSizeSubArraySum = () => {
  function subArray(nums, target) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];

      while (sum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++;
      }
    }

    console.log(minLength === Infinity ? 0 : minLength);
  }
  let target = 7,
    nums = [2, 3, 1, 2, 4, 3];
  subArray(nums, target);
};

export default MinimumSizeSubArraySum;
