/*
 * Arrays
 *     Mutator Functions
 *         Adding Elements to an Array
 *             Array.prototype.push()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.push() 方法，
   * 将多个元素插入到数组的最后面
   */

  var arr = [1, 2, 3];
  arr.push(4, 5, 6);
  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
})();

console.log('\n-------------------------------------------------- 02');
(function() {
  /*
   * 使用元素赋值的方式模拟 push() 方法
   */

  var arr = [1, 2, 3];
  arr[arr.length] = 4;
  arr[arr.length] = 5;
  arr[arr.length] = 6;
  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
})();
