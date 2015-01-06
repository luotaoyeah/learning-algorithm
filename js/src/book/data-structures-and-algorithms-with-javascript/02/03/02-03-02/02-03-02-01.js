/*
 * Arrays
 *     Accessor Functions
 *         String Representations of Arrays
 *             Array.prototype.join()
 *
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.protytype.join() 方法，
   * 将数组的所有元素使用指定的连接符连接成一个字符串，
   * 默认的连接符为逗号（,）
   */

  var arr = [1, 2, 3];
  console.log(arr.join()); // 1,2,3
  console.log(arr.join('')); // 123
  console.log(arr.join('-')); // 1-2-3
})();
