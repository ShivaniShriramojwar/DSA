const BinarySearch = () => {
  //   2️⃣ Binary Search – O(log n) 🚀 (Faster!)
  // ⚠️ Works only on sorted arrays
  // ✅ Logic:
  // Start with the middle of the array.

  // If the middle is the target, return it.

  // If target < mid, search the left half.

  // If target > mid, search the right half.

  function binarySearch(arr, t) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === t) {
        return mid;
      } else if (arr[mid] < t) {
        return mid + 1;
      } else {
        return mid - 1;
      }
    }
    return -1;
  }

  // Linear Search – O(n)
  // ✅ Logic:
  // Check each element one by one until you find the target.
};
export default BinarySearch;
