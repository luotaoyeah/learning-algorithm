/*
 * Arrays
 *     Mutator Functions
 *         Adding and Removing Elements from the Middle of an Array
 *             Array.prototype.splice()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * 如果第二个参数后面还有参数，
   * 则在删除元素之后，将第二个参数后面的所有参数，作为元素插入到开始删除的索引位置
   */

  var arr = [1, 2, 3, 4];
  var numbers = arr.splice(2, 0, 5, 6, 7);
  console.log(numbers); // []
  console.log(arr); // [ 1, 2, 5, 6, 7, 3, 4 ]
})();

console.log('\n-------------------------------------------------- 02');
(function() {
  /*
   * 使用 splice() 模拟 push()
   */

  var arr = [1, 2, 3];
  arr.splice(arr.length, 0, 4, 5, 6);
  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
})();

console.log('\n-------------------------------------------------- 03');
(function() {
  /*
   * 使用 splice() 模拟 unshift()
   */
  var arr = [1, 2, 3];
  arr.splice(0, 0, 4, 5, 6);
  console.log(arr); // [ 4, 5, 6, 1, 2, 3 ]
})();
