// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
// Brute Force: O(n*k)

function maxSubarraySum(arr, k) {
  let max = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

// Optimized: O(n) – Sliding Window
function maxSubarraySum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // add next, remove previous
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39

//  Example 2: Smallest subarray with sum ≥ target

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4,3])

// Given an array of positive integers nums and a positive integer target, return the minimum length of a contiguous subarray whose sum is greater than or equal to target.
// If no such subarray exists, return 0.
function minSubArrayLen(target, nums) {
  let start = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      minLen = Math.min(minLen, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 → [4,3]
console.log(minSubArrayLen(4, [1, 4, 4])); // 1 → [4]
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // 5 → [1,2,3,4,5]
console.log(minSubArrayLen(100, [1, 2, 3])); // 0 → no such subarray
