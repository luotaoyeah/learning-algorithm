/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Repetition Constructs
 *             while
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * while
   */

  var n = 1;
  var sum = 0;

  while (n <= 10) {
    sum += n;
    n++;
  }

  console.log(sum); // 55
})();
