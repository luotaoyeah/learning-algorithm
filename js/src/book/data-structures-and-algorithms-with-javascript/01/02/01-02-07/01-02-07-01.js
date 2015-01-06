/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Recursion
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * function 可以递归调用
   */

  function factorial(n) {
    if (n === 1) {
      return n;
    }

    return n * factorial(n - 1);
  }

  console.log(factorial(5)); // 120
})();

console.log('\n-------------------------------------------------- 02');
(function() {
  /*
   * 所有的递归调用都可以使用循环来实现
   */

  function factorial(n) {
    var product = 1;

    for (var i = 1; i <= n; i++) {
      product *= i;
    }

    return product;
  }

  console.log(factorial(5)); // 120
})();
