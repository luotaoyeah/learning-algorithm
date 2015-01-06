/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.every()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.every() 方法，
   * 用于判断：是否数组中的所有元素都满足某个条件
   */

  var arr = [2, 4, 6];

  /*
   * 回调函数接受三个参数：当前元素，当前索引，当前数组
   * 回调函数返回 boolean 值，表示当前元素是否满足条件
   */
  console.log(
    arr.every(function(value, index, array) {
      return value % 2 === 0;
    }),
  ); // true
})();
