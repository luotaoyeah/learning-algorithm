/*
 * Arrays
 *     Mutator Functions
 *         Removing Elements from an Array
 *             Array.prototype.pop()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.pop() 方法，
   * 从数组的最后面移除一个元素，并返回被移除的元素
   */

  var arr = [1, 2, 3, 4];
  var n = arr.pop();
  console.log(n); // 4
  console.log(arr); // [ 1, 2, 3 ]
})();

console.log("\n-------------------------------------------------- 02");
(function() {
  /*
   * 如果数组中已经没有元素，则返回 undefined
   */

  var arr = [];
  var n = arr.pop();
  console.log(n); // undefined
  console.log(arr); // []
})();
