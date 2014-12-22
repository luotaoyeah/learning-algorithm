/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Functions
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * a value-returning function
   */

  function factorial(n) {
    var product = 1;

    for (var i = 1; i <= n; i++) {
      product *= i;
    }

    return product;
  }

  console.log(factorial(4)); // 24
  console.log(factorial(5)); // 120
  console.log(factorial(10)); // 3628800
})();
