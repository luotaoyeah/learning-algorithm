/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Functions
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * a subprocedure or void function
   */

  function curve(arr, amount) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] += amount;
    }
  }

  var grades = [1, 2, 3, 4, 5];
  curve(grades, 5);

  console.log(grades); // [ 6, 7, 8, 9, 10 ]
})();
