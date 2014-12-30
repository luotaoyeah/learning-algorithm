/*
 * Arrays
 *     Mutator Functions
 *         Putting Array Elements in Order
 *             Array.prototype.sort()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 可以提供一个参数，指定元素的排序规则，
   * 该参数是一个函数，接收两个参数（x, y），表示要进行比较的两个元素，
   * 参数函数如果返回负数，表示 x < y
   * 如果返回 0，表示 x = y
   * 如果返回正数，表示 x > y
   */

  console.log([20, 100, 3].sort()); // [ 100, 20, 3 ]
  console.log(
    [20, 100, 3].sort(function(x, y) {
      return x - y;
    })
  ); // [ 3, 20, 100 ]
})();
