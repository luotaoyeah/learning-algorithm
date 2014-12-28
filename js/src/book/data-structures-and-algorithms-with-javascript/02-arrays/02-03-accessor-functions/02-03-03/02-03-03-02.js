/*
 * Arrays
 *     Accessor Functions
 *         Creating New Arrays from Existing Arrays
 *             Array.prototype.splice()
 *
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.splice() 方法，
   * 从数组中间删除一截，并将剩下的两截合在一起
   */

  var arr01 = [1, 2, 3, 4, 5, 6];
  /*
   * 两个参数分别表示：
   *     从哪个索引开始删除
   *     删除多少个元素
   */
  console.log(arr01.splice(1, 2)); // [ 2, 3 ]
  console.log(arr01); // [ 1, 4, 5, 6 ]
})();
