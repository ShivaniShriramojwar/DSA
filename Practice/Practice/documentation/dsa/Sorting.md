**c:\Practice\dsa\Sorting.js**
=====================================

**Overview**
------------

This JavaScript file provides a sorting module with a single function, `bubbleSort`, which implements the bubble sort algorithm to sort an array in ascending order.

**Features**
------------

*   Bubble sort algorithm implementation
*   Sorting of arrays in ascending order

**Code Breakdown**
-----------------

### bubbleSort(arr)

#### Name

`bubbleSort`

#### Purpose

Sorts an array in ascending order using the bubble sort algorithm.

#### Parameters

*   `arr`: The array to be sorted (type: `Array`)

#### Returns

The sorted array (type: `Array`)

#### Notes

*   The function uses a nested loop to repeatedly iterate through the array, comparing adjacent elements and swapping them if they are in the wrong order.
*   The process is repeated until the array is sorted.

**Usage Examples**
-----------------

```javascript
const sortedArray = bubbleSort([5, 3, 8, 4, 2]);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

**Notes**
-------

*   This implementation has a time complexity of O(n^2), making it less efficient for large datasets.
*   The function modifies the original array.

**Language-Specific Notes**
-------------------------

*   The function uses JavaScript's array destructuring feature to swap elements in a concise manner: `[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];`