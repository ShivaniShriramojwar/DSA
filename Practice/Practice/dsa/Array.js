const Array = () => {
  //   console.log("Array");
  //   1. Create an array of 5 numbers and print the square of each number using map().
  const newArr = [2, 7, 9, 5, 3];
  const squared = newArr.map((i) => i * i);
  //   console.log("squared", squared);

  //   2.From an array of numbers, filter out the even numbers using filter().
  const filterdArr = newArr.filter((num) => num % 2 === 0);
  //   console.log("filterdArr", filterdArr);

  //   3.Calculate the sum of an array using reduce().

  const reduceArr = newArr.reduce((acc, i) => acc + i, 0);

  //   console.log({ reduceArr });

  //4. Remove the third element from an array using splice().

  const spliceArr = newArr.splice(2, 1);
  //   console.log({ spliceArr });
  //   console.log({ newArr });

  function onPlus(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
      digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
  }
  const digits = [1, 2, 3];

  console.log(onPlus([1, 2, 3]));
};
export default Array;
