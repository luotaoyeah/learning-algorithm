/*
 * Arrays
 *     Iterator Functions
 *         Iterator Functions That Return a New Array
 *             Array.prototype.filter()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.filter() 方法，
   * 对数组元素进行过滤，返回一个新的数组，
   * 新数组中的元素，全部满足过滤条件
   */

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(
    arr.filter(function(value, index, array) {
      return value % 2 === 0;
    })
  ); // [ 2, 4, 6, 8 ]

  console.log(
    arr.filter(function(value, index, array) {
      return value % 2 === 1;
    })
  ); // [ 1, 3, 5, 7, 9 ]
})();
