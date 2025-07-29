const RomanToInteger = () => {
  //   let s = "III";
  let s = "MCMXCIV";
  function RomToInt(s) {
    const symbolMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
      const curr = symbolMap[s[i]];
      const next = symbolMap[s[i + 1]];

      //   curr = 1,
      // next = 1

      if (next > curr) {
        total += next - curr;

        i++;
      } else {
        total += curr;
      }
    }
    console.log("total3", total);
    return total;
  }

  RomToInt(s);
};

export default RomanToInteger;

// | Metric           | Complexity |
// | ---------------- | ---------- |
// | Time Complexity  | O(n)       |
// | Space Complexity | O(1)       |
