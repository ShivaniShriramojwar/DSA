const TwoPointerTechnique = () => {
  //   1. Given a sorted array and a target sum, check if there exists a pair whose sum equals the target.
  const hasPairWithSum = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];
      console.log("1", sum);
      if (sum === num) return true;
      if (sum < num) {
        left++;
      } else {
        right--;
      }
    }
    return false;
  };
  //   console.log(hasPairWithSum([1, 2, 3, 4, 6], 10));

  //   2.Reverse an Array
  const reverseArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  };
  //   console.log(reverseArray([1, 2, 3, 4]));

  //   3. Is Palindrome?

  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] === str[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }

    return true;
  };
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
};

//  Remove Duplicate from sorted array
export default TwoPointerTechnique;
