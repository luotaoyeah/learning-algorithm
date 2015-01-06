/*
 * Arrays
 *     Using Arrays
 *         Aggregate Array Operations
 *             Array.prototype.toString()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array 的 toString() 方法是继承自 Object，但是进行了重写，
   * Array.prototype.toString() 方法返回 array 的所有元素，
   * 元素之间使用逗号分隔
   */

  var arr01 = [1, 2, 3];
  console.log(arr01); // [ 1, 2, 3 ]
  console.log(arr01.toString()); // 1,2,3
})();
