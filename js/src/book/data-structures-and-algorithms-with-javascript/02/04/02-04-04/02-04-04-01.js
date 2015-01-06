/*
 * Arrays
 *     Mutator Functions
 *         Putting Array Elements in Order
 *             Array.prototype.reverse()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.reverse() 方法，
   * 将数组中的元素反序，同时返回该数组
   */

  var arr = [1, 2, 3];
  arr.reverse();
  console.log(arr); // [ 3, 2, 1 ]
})();
