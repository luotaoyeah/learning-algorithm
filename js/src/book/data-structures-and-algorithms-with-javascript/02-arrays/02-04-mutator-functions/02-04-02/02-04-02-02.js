/*
 * Arrays
 *     Mutator Functions
 *         Removing Elements from an Array
 *             Array.prototype.shift()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.shift() 方法，跟 Array.prototype.unshift() 方法操作相反，
   * 从数组的最前面移除一个元素，并返回该移除的元素
   */

  var arr = [1, 2, 3, 4];
  var n = arr.shift();
  console.log(n); // 1
  console.log(arr); // [ 2, 3, 4 ]
})();

console.log("\n-------------------------------------------------- 02");
(function() {
  /*
   * 如果数组中已经没有元素，则返回 undefined
   */

  var arr = [];
  var n = arr.shift();
  console.log(n); // undefined
  console.log(arr); // []
})();
