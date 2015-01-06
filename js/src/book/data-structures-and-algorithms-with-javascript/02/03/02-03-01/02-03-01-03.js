/*
 * Arrays
 *     Accessor Functions
 *         Searching for a Value
 *             Array.prototype.indexOf()
 *             Array.prototype.lasIndexOf()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.indexOf() 方法，
   * Array.prototype.lastIndexOf() 方法，
   *     第二个参数表示：从哪个索引开始查找，默认为 length - 1
   */
  var arr = [1, 2, 3, 2, 1];

  console.log(arr.lastIndexOf(2)); // 3
  console.log(arr.lastIndexOf(2, 2)); // 1

  console.log(arr.indexOf(2)); // 1
  console.log(arr.indexOf(2, 2)); // 3
})();
