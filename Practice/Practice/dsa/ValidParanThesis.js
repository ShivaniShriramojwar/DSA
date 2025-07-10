const ValidParanThesis = (s) => {
  function isValid(s) {
    const stack = [];
    const pairs = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
          return false;
        }
        stack.pop();
      }
    }
    console.log(stack.length === 0);
    return stack.length === 0;
  }

  s = "()[]{}";
  isValid(s);
};
export default ValidParanThesis;
