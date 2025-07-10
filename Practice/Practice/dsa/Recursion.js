// 🧠 What is Recursion?
// Recursion is when a function calls itself to break a problem into smaller parts.

// 🔁 "Divide the problem into subproblems of the same type, solve them, and combine the results."

// Factorial n
const Recursion = () => {
  function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
  }

  console.log(factorial(10));

  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(10));

  function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
  }
  console.log(fibonacciMemo(40)); // ⚡ Much faster
};
export default Recursion;
