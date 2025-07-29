// sliding window problem

const lengthOfLongestSubstring = () => {
  function longestSubstring(s) {
    let charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];

      if (
        charIndexMap.has(currentChar) &&
        charIndexMap.get(currentChar) >= left
      ) {
        left = charIndexMap.get(currentChar) + 1;
      }

      charIndexMap.set(currentChar, right);
      maxLength = Math.max(maxLength, right - left + 1);
    }

    console.log(maxLength);
  }

  let s = "bbbbb";
  longestSubstring(s);

  function withoutBuiltInMethod(s) {
    let charIndex = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];

      if (
        charIndex[currentChar] !== undefined &&
        charIndex[currentChar] >= left
      ) {
        left = charIndex[currentChar] + 1;
      }

      charIndex[currentChar] = right;
      windowsLength = right - left + 1;

      if (windowsLength > maxLength) {
        maxLength = windowsLength;
      }

      return maxLength;
    }
  }
  //     Example 1:
  // Input: s = "abcabcbb"
  // Output: 3
  // Explanation: The answer is "abc", with the length of 3.
};
export default lengthOfLongestSubstring;
