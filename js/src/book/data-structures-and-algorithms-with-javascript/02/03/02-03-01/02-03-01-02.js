/*
 * Arrays
 *     Accessor Functions
 *         Searching for a Value
 *             Array.prototype.lasIndexOf()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.lastIndexOf() 方法，
   * 检查参数是否存在于该数组中，
   *     如果存在，则返回最后一次出现的索引，
   *     如果不存在，则返回 -1
   */
  var arr = [1, 2, 3, 2, 1];

  console.log(arr.lastIndexOf(2)); // 3
  console.log(arr.lastIndexOf(9)); // -1
})();
