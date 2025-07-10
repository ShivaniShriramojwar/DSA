// Remove Duplicates from Sorted Array
// ex1. Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// ex2.Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const LeetCodeArray = () => {
  function removeDuplicates(nums) {
    if (nums === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        nums[i + 1] = nums[j];
        i++;
      }
    }
    // return i + 1;
    return nums;
  }

  let result = removeDuplicates([1, 1, 2]);
  // console.log(result); // ✅ Output: 2
};

//   return i + 1; will return 2 and
// return nums will return [1,2,2]
// as per problem doesnt matter what is last count

//2 Best Time to Buy and Sell Stock II

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.
function maxProfit(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let current = prices[i];
    let previous = prices[i - 1];

    if (current > previous) {
      profit += current - previous;
    }
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
export default LeetCodeArray;
