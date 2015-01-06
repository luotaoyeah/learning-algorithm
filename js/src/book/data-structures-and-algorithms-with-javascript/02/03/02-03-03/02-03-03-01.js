/*
 * Arrays
 *     Accessor Functions
 *         Creating New Arrays from Existing Arrays
 *             Array.prototype.concat()
 *
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.concat() 方法，
   * 将多个 array 的元素合并到一个 array 中
   */

  var arr01 = [9];
  var arr02 = ['x'];
  var arr03 = [false];
  console.log(arr01.concat(arr02, arr03)); // [ 9, 'x', false ]
  console.log(arr02.concat(arr03, arr01)); // [ 'x', false, 9 ]
})();
