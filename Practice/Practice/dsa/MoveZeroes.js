const moveZeroes = () => {
  let nums = [0, 1, 0, 3, 12];

  let insertValue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertValue] = nums[i];
      insertValue++;
    }
  }

  while (insertValue < nums.length) {
    nums[insertValue] = 0;
    insertValue++;
  }
  console.log("nums", nums);
};
export default moveZeroes;
