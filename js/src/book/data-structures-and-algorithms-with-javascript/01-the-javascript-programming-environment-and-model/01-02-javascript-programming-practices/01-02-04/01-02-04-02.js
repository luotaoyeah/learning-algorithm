/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Repetition Constructs
 *             for
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * for
   */

  var sum = 0;

  for (var i = 1; i <= 10; i++) {
    sum += i;
  }

  console.log(sum); // 55
})();
