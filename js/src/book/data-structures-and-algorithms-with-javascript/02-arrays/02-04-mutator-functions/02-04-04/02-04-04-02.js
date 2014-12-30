/*
 * Arrays
 *     Mutator Functions
 *         Putting Array Elements in Order
 *             Array.prototype.sort()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.sort() 方法，
   * 对数组中的元素进行排序
   */

  /*
   * 默认行为：将元素转换为字符串，然后按照字符顺序进行排序，
   * 因此，对于 number 类型的元素，也会先被转换为 string 再进行排序
   */

  console.log(["b", "a", "c"].sort()); // [ 'a', 'b', 'c' ]
  console.log([20, 100, 3].sort()); // [ 100, 20, 3 ]
  console.log(["20", "100", "3"].sort()); // [ '100', '20', '3' ]
})();
