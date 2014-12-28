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
   * 如果第二个参数后面还有参数，则表示：
   *     将其他的参数插入到两截的中间，并最终合并为一个数组
   */

  var arr01 = [1, 2, 3, 4, 5, 6];
  arr01.splice(1, 2, "a", "b", "c");
  console.log(arr01); // [ 1, 'a', 'b', 'c', 4, 5, 6 ]
})();
