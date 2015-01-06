/*
 * Arrays
 *     Accessor Functions
 *         String Representations of Arrays
 *             Array.prototype.toString()
 *             Array.prototype.toLocaleString()
 *
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.protytype.toString() 方法，
   * 返回数组的所有元素使用逗号连接成的字符串
   */

  var arr = [1, 2, 3];
  console.log(arr.toString()); // 1,2,3
})();

console.log('\n-------------------------------------------------- 02');
(function() {
  /*
   * Array.prototype.toLocaleString() 方法，
   * 返回数组的所有元素使用逗号连接成的字符串，
   * 但是会分别调用每个元素的 toLocaleString() 方法，使用该方法的返回值作为元素的值
   */

  var arr = [100000];
  console.log(arr.toString()); // 100000
  console.log(arr.toLocaleString()); // 100,000
})();
