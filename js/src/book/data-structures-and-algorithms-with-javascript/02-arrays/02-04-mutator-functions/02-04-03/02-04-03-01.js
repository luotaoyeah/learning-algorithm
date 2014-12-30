/*
 * Arrays
 *     Mutator Functions
 *         Adding and Removing Elements from the Middle of an Array
 *             Array.prototype.splice()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.splice() 方法，
   * 从数组中任意位置，移除任意个元素
   */
  var arr = [1, 2, 3, 4, 5, 6];

  /*
   * 第一个参数表示：从哪个索引开始删除，
   * 第二个参数表示：要删除多少个元素
   * 返回删除的元素组成的数组
   */
  var numbers = arr.splice(2, 2);
  console.log(numbers); // [ 3, 4 ]
  console.log(arr); // [ 1, 2, 5, 6 ]
})();

console.log("\n-------------------------------------------------- 02");
(function() {
  /*
   * 使用 splice() 模拟 pop()
   */

  var arr = [1, 2, 3, 4];
  var n = arr.splice(arr.length - 1, 1);
  console.log(n[0]); // 4
  console.log(arr); // [ 1, 2, 3 ]
})();

console.log("\n-------------------------------------------------- 03");
(function() {
  /*
   * 使用 splice() 模拟 shift()
   */

  var arr = [1, 2, 3, 4];
  var n = arr.splice(0, 1);
  console.log(n[0]); // 1
  console.log(arr); // [ 2, 3, 4 ]
})();
