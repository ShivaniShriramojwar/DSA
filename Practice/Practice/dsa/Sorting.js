const Sorting = () => {
  // | Algorithm      | Time Complexity | Type             |
  // | -------------- | --------------- | ---------------- |
  // | Bubble Sort    | O(n²)           | Comparison-based |
  // | Selection Sort | O(n²)           | Comparison-based |
  // | Insertion Sort | O(n²)           | Comparison-based |

  // 1️⃣ Bubble Sort
  // Repeats passes through the list, swapping adjacent elements if they are in the wrong order.
  // console.log(bubbleSort([5, 3, 8, 4, 2]));

  /**
   * Sorts an array in ascending order using the bubble sort algorithm.
   * This function repeatedly iterates through the array, comparing adjacent elements and swapping them if they are in the wrong order.
   * The process is repeated until the array is sorted.
   *
   * @param {Array} arr - The array to be sorted.
   * @returns {Array} The sorted array.
   */
  function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  console.log(bubbleSort([5, 3, 8, 4, 2]));

  //   2️⃣ Selection Sort
  // Finds the minimum element from the unsorted part and puts it at the beginning.
};
export default Sorting;
